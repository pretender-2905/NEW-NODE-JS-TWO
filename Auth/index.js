// new file fully
// mongo db connection

import express from 'express'
import morgan from 'morgan'
import 'dotenv/config' //ye MONGODBURI ko connect kry ga
import taskRoutes from './routers/tasks.js'
import authRoutes from './routers/auth.js'
// import userRoutes from './routers/users.js'
const app = express()
const PORT = 4000
app.use(express.json())
app.use(morgan('tiny'))
import mongoose from 'mongoose'



console.log("MONGODBURI", process.env.MONGODBURI)


mongoose.connect(process.env.MONGODBURI)
.then(()=> console.log("mongo db connected successfully..."))
.catch((error)=> console.log("error=>", error))

// app.get
app.get("/", (req,res)=>{
    res.send("Server is running nowwwwww!")
})



app.use("/task", taskRoutes)
app.use("/auth", authRoutes)
// app.use("/user", userRoutes)
app.listen(PORT, ()=> console.log(`The server is running on ${PORT}`))