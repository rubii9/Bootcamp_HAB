const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .error(new Error('The provided email is not well formed.')),
  password: Joi.string()
    .min(6)
    .max(100)
    .required()
    .error(new Error('The password must have 6 characters or more.'))
});

module.exports = {
  userSchema
};
