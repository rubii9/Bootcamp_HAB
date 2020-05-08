require('dotenv').config();
const jwt = require('jsonwebtoken');

function userAuthenticated(req, res, next) {
  try {
    // Get authorization header
    const { authorization } = req.headers;

    // Check if token is valid
    const decoded = jwt.verify(authorization, process.env.SECRET);

    // Add token payload to request
    req.auth = decoded;

    // Continue
    next();
  } catch (error) {
    const authError = new Error('Invalid authorization token');
    authError.httpCode = 401;
    next(authError);
  }
}

function userIsAdmin(req, res, next) {
  // Check if the user is admin in req.auth (see before) and send error if not
  if (!req.auth || req.auth.role !== 'admin') {
    const error = new Error(
      'You do not have admin privileges to access this resource'
    );
    error.httpCode = 401;
    return next(error);
  }

  // Continue to the next middleware
  next();
}

module.exports = {
  userAuthenticated,
  userIsAdmin
};
