const express = require('express')
const { getTaskController, updateTaskController, createTaskController, deleteTaskController } = require('../controller/taskController')
const router = express.Router()
//create routers
//GET || get tasks
router.get('/getTask',getTaskController)
//PUT || update task
router.put('/updateTask/:id',updateTaskController)
//POST || create tasks
router.post('/createTask',createTaskController)
//DELETE || delete tasks
router.delete('/deleteTask/:id',deleteTaskController)

module.exports = router