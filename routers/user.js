import express from 'express'
const router = express.Router()
const users = [
    {
        fullName: 'Muhammad Ibrahim',
        email: "muhammadibrahim@gmail.com",
        id:1,
    },
]

router.get("/", (req, res) => {
    res.status(200).json({
        error: false,
        data: users,
        message: "User's fetched successfully!"
    });
});

router.post("/", (req,res)=>{
    const {fullName, email} = req.body
    users.push({fullName, email, id: users.length + 1})
    console.log("fullname=> ", fullName)
    console.log("email> ", email)
    res.status(201).json({
        error:false,
        data:users,
        message: "Users added successfully",
    });
});

router.get("/:id", (req,res)=>{
    const user = users.find((data)=> data.id == parseInt(req.params.id) )
    if(!user){
        return res.status(404).json({
        error:true,
        data:null,
        message: "User Not Found",
    });
    }
         res.status(201).json({
        error:false,
        data:user,
        message: "User Found",
    });
})
export default router