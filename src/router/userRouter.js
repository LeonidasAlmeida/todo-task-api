const express = require('express')
const { createUserController, updateUserController, deleteUserController, getUserController } = require('../controller/userController')
const router = express.Router()
//create routers
//GET || get tasks
router.get('/getUser',getUserController)
//PUT || update task
router.put('/updateUser/:id',updateUserController)
//POST || create tasks
router.post('/create-user',createUserController)
//DELETE || delete tasks
router.delete('/deleteUser/:id',deleteUserController)

module.exports = router