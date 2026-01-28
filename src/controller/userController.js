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
        if(!userExist){return utilResponse(res,404,false,'NOT_FOUND',error)}
        //create user
        const user = await userModel.create({value})
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
        
    } catch (error) {
       console.log(error)
       utilResponse(res,500,false,'INTERNAL_SERVER_ERROR',error) 
    }
}
//update user controller
const updateUserController = async (req, res)=>{
      try {
        
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