import Joi from 'joi'

export const registerUserSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'O Nome é obrigatório.',
    'string.empty': 'O Nome é obrigatório.'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'E-mail inválido.',
    'any.required': 'O Email é obrigatório.',
    'string.empty': 'O Email é obrigatório.'
  }),
  password: Joi.string().min(5).required().messages({
    'any.required': 'A Senha é obrigatória.',
    'string.empty': 'A Senha é obrigatória.',
    'string.min': 'A Senha precisa conter, no mínimo, 5 caracteres.'
  }),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'As senhas não coincidem.',
    'any.required': 'A confirmação da senha é obrigatória.',
    'any.empty': 'A confirmação da senha é obrigatória.'
  }),
  cpf: Joi.string()
    .regex(/^[0-9]{11}$/)
    .trim()
    .messages({
      'string.pattern.base': 'CPF inválido',
      'string.length': 'CPF inválido'
    }),
  phone: Joi.string()
    .regex(/^[0-9]{11}$/)
    .trim()
    .messages({
      'string.pattern.base': 'Número de telefone inválido',
      'string.length': 'Número de telefone inválido'
    })
})

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'O email precisa ser válido',
    'any.required': 'O email é obrigatório',
    'string.empty': 'O email é obrigatório'
  }),
  password: Joi.string().min(5).required().messages({
    'any.required': 'A senha é obrigatória',
    'string.empty': 'A senha é obrigatória',
    'string.min': 'A senha precisa conter, no mínimo, 5 caracteres'
  })
})

export const updateUserSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'O Nome é obrigatório.',
    'string.empty': 'O Nome é obrigatório.'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'E-mail inválido.',
    'any.required': 'O Email é obrigatório.',
    'string.empty': 'O Email é obrigatório.'
  }),
  password: Joi.string().min(5).required().messages({
    'any.required': 'A Senha é obrigatória.',
    'string.empty': 'A Senha é obrigatória.',
    'string.min': 'A Senha precisa conter, no mínimo, 5 caracteres.'
  }),
  cpf: Joi.string()
    .regex(/^[0-9]{11}$/)
    .trim()
    .messages({
      'string.pattern.base': 'CPF inválido',
      'string.length': 'CPF inválido'
    }),
  phone: Joi.string()
    .regex(/^[0-9]{11}$/)
    .trim()
    .messages({
      'string.pattern.base': 'Número de telefone inválido',
      'string.length': 'Número de telefone inválido'
    })
})
