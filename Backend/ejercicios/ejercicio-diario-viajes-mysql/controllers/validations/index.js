const Joi = require('@hapi/joi');

// New entry
const entrySchema = Joi.object().keys({
  place: Joi.string()
    .max(100)
    .required()
    .error(
      new Error(
        'El campo place es obligatorio y no puede tener más de 100 caracteres'
      )
    ),
  description: Joi.string()
    .max(1000)
    .required()
    .error(
      new Error(
        'El campo description es obligatorio y non puede tener más de 1000 caracteres'
      )
    )
});

const voteSchema = Joi.object().keys({
  vote: Joi.number()
    .min(1)
    .max(5)
    .integer()
    .required()
    .error(new Error('El campo voto debe existir y ser un número entre 1 y 5'))
});

const searchSchema = Joi.string()
  .min(2)
  .required()
  .error(new Error('El campo de búsqueda debe de ser de máis de 2 caracteres'));

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .error(new Error('El campo email debe ser un email bien formado')),
  password: Joi.string()
    .min(6)
    .max(100)
    .required()
    .error(new Error('La password debe de tener entre 6 y 100 carateres'))
});

const editUserSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .error(new Error('El campo email debe ser un email bien formado')),
  realName: Joi.string()
    .max(255)
    .error(new Error('El nombre real no puede pasar de 255 caracteres'))
});

module.exports = {
  entrySchema,
  voteSchema,
  searchSchema,
  userSchema,
  editUserSchema
};
