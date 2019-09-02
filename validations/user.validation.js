'use strict'

const Joi = require('joi')

// User validation rules
module.exports = {
  create: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      fullName: Joi.string().max(128).required(),
      companyName: Joi.string().required()
    }
  }
}
