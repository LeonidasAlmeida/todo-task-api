const joi = require('joi')
const validationsTask = joi.object({
    title:joi.string().min(3).required(),
    content:joi.string().required(),
    user:joi.string().required()
})
module.exports = validationsTask