//create user controller

const taskModel = require("../model/taskModel")
const userModel = require("../model/userModel")
const { utilResponse } = require("../utils/resResponse")
const validationsTask = require("../validations/taskValidations")


const createTaskController = async (req,res)=>{
    try {
        //get data
        const {error,value} = validationsTask.validate(req.body)
      
        if(error){return utilResponse(res,400,false,'BAD_REQUEST',error)}
        //validate user 
        const taskExist = await taskModel.findOne({title: value.title})
        if(taskExist){return utilResponse(res,409,false,'CONFLICT task ALREADY EXIST',error)}
        //check if user id exist
         const userExist = await userModel.findById(value.user)
        if(!userExist){return utilResponse(res,409,false,'CONFLICT USER NOT EXIST')}
        //create user
        const user = await taskModel.create({title:value.title, content:value.content,user:value.user})
        utilResponse(res,201,true,'create successfully','',user)

    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//get user controller
const getTaskController = async (req, res)=>{
      try {
        //get data
        const data = await taskModel.find({})
        utilResponse(res,201,true,'success','',data)
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//update user controller
const updateTaskController = async (req, res)=>{
      try {
        // get id
        const {id} = req.params
        if(!id){return utilResponse(res,400,false,'BAD_REQUEST')}
         const taskExist = await taskModel.findOne({_id:id})
        if(!taskExist){return utilResponse(res,404,false,'NOT_FOUND ID')}
        
        const {title, content} = req.body

        const taskTitle = await taskModel.findOne({title:title})
        if(taskTitle){return utilResponse(res,409,false,'CONFLICT TITLE TASK ALREADY EXIST')}

        if(title) taskExist.title = title
        if(content) taskExist.content = content

        await taskExist.save()
        utilResponse(res,200,true,'success to update')
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//delete user controller
const deleteTaskController = async (req, res)=>{
      try {
         // get id
        const {id} = req.params
        if(!id){return utilResponse(res,400,false,'BAD_REQUEST')}
        await taskModel.findByIdAndDelete(id)
        utilResponse(res,200,true,'success delete')
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'Internal Error API createUserControlller',error) 
    }
}
module.exports = { 
    createTaskController,
    getTaskController,
    updateTaskController,
    deleteTaskController
}