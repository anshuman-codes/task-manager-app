require('./db/mongoose.js') 
const express= require('express')
const userRouter= require('./routers/user')
const taskRouter = require('./routers/task')


const app= express()
const port= process.env.PORT



app.use(express.json())// Automatically parses incoming JSON as an object for our use
app.use(userRouter)
app.use(taskRouter)

const jwt= require('jsonwebtoken')


app.listen(port,()=>{
    console.log("Server is listening on "+ port)
})

