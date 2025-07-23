const tasks = [
    {
        id: 1,
        task: "Sona nahi he"

    },
    {
        id:2,
        task: "Jagna hai"
    },
    {
        id:3,
        task: "Concept samajna hai"
    },
];

import express from 'express'
import morgan from 'morgan'
const app = express()
const PORT = 4000
app.use(morgan('tiny'))  //ye bata ta hai kponsi api chal rhi hai
 app.use(express.json()) // jo data bhejty hian ye usko json me convet kr deta hai wrna answer undefined aai ga


 function middleware(req, res, next){
    req.requestBy = "Muhammad Ibrahim"       
    // console.log("Middleware=> ", Date.now())
    res.status(500).send("Bhai system mai maslah agaya hai!!!!!!!!!")
    next()
}
// app.use(middleware)

app.get('/', middleware, (req, res)=>{
    // console.log("req=> ", req)
    console.log("Requestby=> ", req.requestBy)
    res.status(200).send(tasks)
})

app.post("/", (req,res)=>{
    res.send("POST request is called")
    console.log("req.body", req.body)
})

app.put("/", (req, res)=>{
    res.send("Put request is called")
})

app.delete("/", (req,res)=>{
    res.send("Delete request is called")
})

app.listen(PORT, ()=> console.log("Server is running on " + PORT))