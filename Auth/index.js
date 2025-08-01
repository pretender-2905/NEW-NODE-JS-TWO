// new file fully
// mongo db connection

import express from 'express'
import morgan from 'morgan'
// import 'dotenv/config' //ye MONGODBURI ko connect kry ga
import dotenv from 'dotenv';
dotenv.config();
import taskRoutes from './routers/tasks.js'
import authRoutes from './routers/auth.js'
import userRoutes from './routers/users.js'
import courseRoutes from './routers/courses.js'
import mongoose from 'mongoose'
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())


const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";


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
app.use("/user", userRoutes)
app.use("/course", courseRoutes)
app.listen(PORT, ()=> console.log(`The server is running on ${PORT}`))