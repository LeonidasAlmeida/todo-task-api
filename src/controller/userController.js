//create user controller

const userModel = require("../model/userModel")
const { utilResponse } = require("../utils/resResponse")
const userValidations = require("../validations/userValidations")

const createUserController = async (req,res)=>{
    try {
        //get data
        const {error,value} = userValidations.validate(req.body)
      
        if(error){return utilResponse(res,400,false,'BAD_REQUEST',error)}
        //validate user 
        const userExist = await userModel.findOne({email:value.email})
        if(userExist){return utilResponse(res,409,false,'CONFLICT EMAIL ALREADY EXIST',error)}
        //create user
        const user = await userModel.create({name:value.name, email:value.email})
        utilResponse(res,201,true,'create successfully','',user)

    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//get user controller
const getUserController = async (req, res)=>{
      try {
        //get data
        const data = await userModel.find({})
        utilResponse(res,201,true,'success','',data)
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//update user controller
const updateUserController = async (req, res)=>{
      try {
        // get id
        const {id} = req.params
        if(!id){return utilResponse(res,400,false,'BAD_REQUEST')}
         const userExist = await userModel.findOne({_id:id})
        if(!userExist){return utilResponse(res,404,false,'NOT_FOUND ID')}

        const {name, email} = req.body
        if(name) userExist.name = name
        if(email) userExist.email = email

        await userExist.save()
        utilResponse(res,200,true,'success to update')
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//delete user controller
const deleteUserController = async (req, res)=>{
      try {
        
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'Internal Error API createUserControlller',error) 
    }
}
module.exports = { 
    createUserController,
    getUserController,
    updateUserController,
    deleteUserController
}