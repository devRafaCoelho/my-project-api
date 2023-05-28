import Joi from 'joi'

export const costumerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'O nome é obrigatório',
    'string.empty': 'O nome é obrigatório'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'O email precisa ser válido',
    'any.required': 'O email é obrigatório',
    'string.empty': 'O email é obrigatório'
  }),
  cpf: Joi.string()
    .regex(/^[0-9]{11}$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': 'CPF inválido',
      'string.length': 'CPF inválido',
      'any.required': 'O CPF é obrigatório'
    }),
  phone: Joi.string()
    .regex(/^[0-9]{11}$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': 'Número de telefone inválido',
      'string.length': 'Número de telefone inválido',
      'any.required': 'O telefone é obrigatório'
    }),
  address: Joi.string().trim().messages({
    'string.base': 'Endereço inválido',
    'string.empty': 'Endereço inválido'
  }),
  complement: Joi.string().trim().messages({
    'string.base': 'Complemento inválido',
    'string.empty': 'Complemento inválido'
  }),
  zip_code: Joi.string()
    .regex(/^\d{8}$/)
    .trim()
    .messages({
      'string.pattern.base': 'O campo CEP deve ser composto por apenas 8 números',
      'string.length': 'O campo CEP deve ser composto por apenas 8 números',
      'string.empty': 'O campo CEP deve ser composto por apenas 8 números'
    }),
  district: Joi.string().trim().messages({
    'string.base': 'Bairro inválido',
    'string.empty': 'Bairro inválido'
  }),
  city: Joi.string().trim().messages({
    'string.base': 'Cidade inválida',
    'string.empty': 'Cidade inválida'
  }),
  uf: Joi.string()
    .regex(/^[A-Z]{2}$/)
    .trim()
    .messages({
      'string.pattern.base': 'O campo Estado deve ser composto por apenas duas letras maiúsculas',
      'string.length': 'O campo Estado deve ser composto por apenas duas letras maiúsculas',
      'string.empty': 'O campo Estado deve ser composto por apenas duas letras maiúsculas'
    })
})
