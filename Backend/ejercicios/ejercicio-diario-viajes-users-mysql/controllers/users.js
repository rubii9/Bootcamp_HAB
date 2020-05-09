require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getConnection } = require('../db');
const { userSchema } = require('./validations');

async function register(req, res, next) {
  try {
    // Validate body payload
    await userSchema.validateAsync(req.body);

    const connection = await getConnection();
    const { email, password } = req.body;

    // Check if user email is already in the database
    const [
      existing
    ] = await connection.query('SELECT id from users where email=?', [email]);

    if (existing.length) {
      const error = new Error('The email already exists on the DB');
      error.httpCode = 409;
      throw error;
    }

    // Hash provided password
    const dbPassword = await bcrypt.hash(password, 10);

    // Add user to DB
    const [result] = await connection.query(
      `
      INSERT INTO users (registrationDate, email, password, role)
      VALUES(NOW(), ?, ?, "normal")
    `,
      [email, dbPassword]
    );

    connection.release();

    // Respond with useful information
    res.send({
      status: 'ok',
      data: { id: result.insertId, email: email, role: 'normal' }
    });
  } catch (error) {
    next(error);
  }
}

async function info(req, res, next) {
  try {
    // Destructure id from route params
    const { id } = req.params;

    // Get an available connection from the pool
    const connection = await getConnection();

    // Read user info from DB
    const [
      result
    ] = await connection.query(
      'SELECT id, registrationDate, email, role from users where id=?',
      [id]
    );

    // Throw 404 if no results
    if (!result.length) {
      const error = new Error(`There is no user with the id ${id}`);
      error.httpCode = 404;
      throw error;
    }

    // Release connection
    connection.release();

    // Create response and send it
    res.send({
      status: 'ok',
      data: result[0]
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    // Validate body payload
    await userSchema.validateAsync(req.body);

    const { email, password } = req.body;
    const connection = await getConnection();

    // Find the user in the db by email
    const [
      dbUser
    ] = await connection.query(
      'SELECT id, email, password, role from users where email=?',
      [email]
    );

    // If there is no user with that email respond with error
    if (!dbUser.length) {
      const error = new Error('There is no user with that email on the DB');
      error.httpCode = 404;
      throw error;
    }

    // Check if the provided password matches the stored password
    const [user] = dbUser;

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      const error = new Error('Password incorrect');
      error.httpCode = 401;
      throw error;
    }

    // Build jsonwebtoken
    const tokenPayload = { id: user.id, role: user.role, ip: user.ip };
    const token = jwt.sign(tokenPayload, process.env.SECRET, {
      expiresIn: '30d'
    });
    console.log(token);

    // Create response
    res.send({
      status: 'ok',
      message: 'Login succesful',
      data: { token }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
  info
};
