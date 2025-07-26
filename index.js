// const tasks = [
//     {
//         id: 1,
//         task: "Sona nahi he",
//         completed: true,

//     },
//     {
//         id:2,
//         task: "Jagna hai",
//         completed: false,
//     },
//     {
//         id:3,
//         task: "Concept samajna hai",
//         completed: true,
//     },
// ];

// import express from 'express'
// import morgan from 'morgan'
// import userRoutes from './routers/user.js'; // 🔁 include `.js` if using ES Module

// const app = express()
// const PORT = 4000
// app.use(morgan('tiny'))  //ye bata ta hai kponsi api chal rhi hai
//  app.use(express.json()) // jo data bhejty hian ye usko json me convet kr deta hai wrna answer undefined aai ga


// //  function middleware(req, res, next){
// //     req.requestBy = "Muhammad Ibrahim"       
// //     // console.log("Middleware=> ", Date.now())
// //     res.status(500).send("Bhai system mai maslah agaya hai!!!!!!!!!")
// //     next()
// // }
// // app.use(middleware)

// // app.get('/', (req, res)=>{
// //     console.log("Requestby=> ", req.requestBy)
// //     res.status(200).send(tasks)
// // })

// app.use("/user", userRoutes)



// // params => dynamic route or part of url yani isky bagair API complete nhi hoti

// app.get('/singleTask/:id', (req,res)=>{
//     const task = tasks.find((data)=> data.id === parseInt(req.params.id))
//     if(!task){
//         return res.status(404).send("Task not found"

//         )
//     }else{
//         res.status(200).send(task)
//     }
// })

// // query

// app.get('/', (req,res)=>{
//     console.log("req.query=> ", req.query)
     
//        const { completed } = req.query
//        let filter = tasks
//        if(completed){
        
//         filter = tasks.filter((data)=>
//         completed == "1" ? data.completed == true : data.completed == false
//         )
        
//        }
//         res.status(200).send(filter)
//     })
   

// app.listen(PORT, ()=> console.log("Server is running on " + PORT))




// ______________________________________________________________________________________
// ______________________________________________________________________________________

