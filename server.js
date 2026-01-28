const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./src/config/db')
const errorMiddleware = require('./src/middleware/errorMiddleware')
const { utilResponse } = require('./src/utils/resResponse')


//configure dotenv
dotenv.config()
//port
const PORT = process.env.PORT || 8080
//app
const app = express()
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(errorMiddleware)
//CONNECT DB ISN
connectDB()
//test router
app.get('/test',(req,res)=>utilResponse(res,200,true,'Welcome to task api test'))
// user router
app.use('/api/user', require('./src/router/userRouter'))
// task router
app.use('/api/task', require('./src/router/taskRouter'))
//listen
app.listen(PORT,()=>console.log(`Connect to server on port ${PORT}`.white.bgYellow))