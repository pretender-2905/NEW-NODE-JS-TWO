// new file fully
// mongo db

import express from 'express'
import morgan from 'morgan'
const app = express()
const PORT = 4000
app.use(express.json())
app.use(morgan('tiny'))

app.get("/", (req,res)=>{
    res.send("Server is running nowwwwww!")
})

app.listen(PORT, ()=> console.log(`The server is running on ${PORT}`))