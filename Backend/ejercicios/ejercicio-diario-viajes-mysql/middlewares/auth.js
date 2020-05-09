require('dotenv').config();
const jwt = require('jsonwebtoken');

function userIsAuthenticated(req, res, next) {
  try {
    // Check if the authorization header is valid
    const { authorization } = req.headers;

    const decoded = jwt.verify(authorization, process.env.SECRET);
    req.auth = decoded;

    next();
  } catch (error) {
    const authError = new Error('Token inválido');
    authError.httpCode = 401;
    next(authError);
  }
}

function userIsAdmin(req, res, next) {
  if (!req.auth || req.auth.role !== 'admin') {
    const error = new Error('No tienes privilegios de administración');
    error.httpCode = 401;
    return next(error);
  }

  next();
}

module.exports = {
  userIsAuthenticated,
  userIsAdmin
};
