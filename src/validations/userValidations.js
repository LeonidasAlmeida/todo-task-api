const joi = require('joi')

const userValidations = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required()
})
module.exports = userValidations