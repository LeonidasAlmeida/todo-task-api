const express = require('express')
const router = express.Router()
//create routers
//GET || get tasks
router.get('/getUser')
//PUT || update task
router.put('/updateUser/:id')
//POST || create tasks
router.post('/createUser')
//DELETE || delete tasks
router.delete('/deleteUser/:id')