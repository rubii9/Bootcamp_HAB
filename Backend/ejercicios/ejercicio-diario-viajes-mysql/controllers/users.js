require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getConnection } = require('../db');
const { userSchema, editUserSchema } = require('./validations');
const { processAndSavePhoto, deletePhoto } = require('../helpers');

async function newUser(req, res, next) {
  let connection;
  try {
    // Validate body payload
    await userSchema.validateAsync(req.body);

    connection = await getConnection();
    const { email, password } = req.body;

    // Check if user email is already in the db
    const [
      existing
    ] = await connection.query('SELECT id from users where email=?', [email]);

    if (existing.length) {
      const error = new Error('El email ya existe en la base de datos');
      error.httpCode = 409;
      throw error;
    }

    // hash password
    const dbPassword = await bcrypt.hash(password, 10);

    const [result] = await connection.query(
      `
      INSERT INTO users (registrationDate, email, password, role)
      VALUES(NOW(), ?, ?, "normal")
    `,
      [email, dbPassword]
    );

    res.send({
      staus: 'ok',
      message: 'Usuario creado correctamente',
      data: { id: result.insertID, email: email, role: 'normal' }
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

async function getUser(req, res, next) {
  let connection;

  try {
    const { id } = req.params;
    connection = await getConnection();

    const [result] = await connection.query(
      `
      SELECT id, registrationDate, email, role, realName, avatar 
      FROM users WHERE id=?  
    `,
      [id]
    );

    // Throw 404 if no results
    if (!result.length) {
      const error = new Error(`There is no user with the id ${id}`);
      error.httpCode = 404;
      throw error;
    }

    const [userData] = result;

    const payload = {
      registrationDate: userData.registrationDate,
      realName: userData.realName,
      avatar: userData.avatar
    };

    if (userData.id === req.auth.id || req.auth.role === 'admin') {
      payload.email = userData.email;
      payload.role = userData.role;
    }

    res.send({
      status: 'ok',
      data: payload
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

async function loginUser(req, res, next) {
  let connection;

  try {
    await userSchema.validateAsync(req.body);

    const { email, password } = req.body;

    connection = await getConnection();

    // Find the user in the db by email
    const [
      dbUser
    ] = await connection.query(
      'SELECT id, email, password, role from users where email=?',
      [email]
    );

    if (!dbUser.length) {
      const error = new Error(
        'No hay ningún usuario con ese email en la base de datos'
      );
      error.httpCode = 404;
      throw error;
    }

    const [user] = dbUser;

    const passwordsMath = await bcrypt.compare(password, user.password);

    if (!passwordsMath) {
      const error = new Error('Password incorrecta');
      error.httpCode = 401;
      throw error;
    }

    // Build jsonwebtoken
    const tokenPayload = { id: user.id, role: user.role };
    const token = jwt.sign(tokenPayload, process.env.SECRET, {
      expiresIn: '30d'
    });

    // Create response
    res.send({
      status: 'ok',
      message: 'Login correcto',
      data: { token }
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

async function editUser(req, res, next) {
  let connection;

  try {
    await editUserSchema.validateAsync(req.body);

    const { id } = req.params;
    const { realName, email } = req.body;

    connection = await getConnection();

    // Check if user exists

    const [current] = await connection.query(
      `
      SELECT id, avatar FROM users WHERE id=?
    `,
      [id]
    );

    if (!current.length) {
      const error = new Error(`The user with id ${id} does not exist`);
      error.httpCode = 404;
      throw error;
    }

    // Check if auth user is the same as :id or is admin
    if (current[0].id !== req.auth.id && req.auth.role !== 'admin') {
      const error = new Error('No tienes permisos para editar este usuario');
      error.httpCode = 401;
      throw error;
    }

    // Check if there is a uploaded avatar and process it

    let savedFileName;

    if (req.files && req.files.avatar) {
      try {
        savedFileName = await processAndSavePhoto(req.files.avatar);

        if (current && current.avatar) {
          await deletePhoto(current.avatar);
        }
      } catch (error) {
        const imageError = new Error(
          'Can not process upload image. Try again.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    } else {
      savedFileName = current.avatar;
    }

    // Update user

    await connection.query(
      `
      UPDATE users SET realName=?, email=?, avatar=? WHERE id=?
    `,
      [realName, email, savedFileName, id]
    );

    res.send({ status: 'ok', message: 'Usuario actualizado' });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = {
  newUser,
  loginUser,
  getUser,
  editUser
};
