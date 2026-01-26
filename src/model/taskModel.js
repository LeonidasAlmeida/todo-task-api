const { required } = require('joi')
const mongoose = require('mongoose')
const taskModel = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required']
        },
    content:{
        type:String,
        required:[true,'content is required']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,'id user is required']
    }

},{timestamps:true})

module.exports = mongoose.model('tasks',taskModel)