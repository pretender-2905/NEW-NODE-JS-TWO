// import express from 'express'
// const router = express.Router()
// import User from '../models/User.js'
// import sendResponse from '../helpers/sendResponse.js'
// import Joi from 'joi';
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken';


// const registerSchema = Joi.object({
//      email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
//     password: Joi.string().min(6).required(),
//     fullName: Joi.string().alphanum().min(3).max(30).required(),
// });
// const loginSchema = Joi.object({
//      email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
//     password: Joi.string().min(6).required()
// });

// router.post("/register", async (req,res)=>{
//     const {value, error} = registerSchema.validate(req.body)
//     console.log("error", error?.message)
//     if(error){
//         return sendResponse(res, 404, null, true, error.message)
//     }
//     const user = await User.findOne({email: value.email})
//     if(user) return sendResponse(res, 403, null , true, "User with this email already registered")
//     console.log("value", value)
    
//     const hashedPassword = await bcrypt.hash(value.password, 12)
// console.log("hasedpassowrd=> ", hashedPassword)
// value.password = hashedPassword
//    let newUser = new User({...value})
   
//     newUser = await newUser.save()
//     sendResponse(res, 201, newUser, false, "User registered successfully!!")

// })

    
// router.post("/login", async(req,res)=>{
//     const {value, error} = loginSchema.validate(req.body)
//     if (error) return sendResponse(res, 404, null, true, error.message)
//     const user = await User.findOne({email: value.email}).lean()  //lean() ka matlab hai plane javascript ke object mai concert krdo
//     if (!user) return sendResponse(res, 403, null, true, "User is not registered!")
//     const isPasswordValid = await bcrypt.compare(value.password , user.password )
//     if(!isPasswordValid) return sendResponse(res, 403, null, true, "Invalid Credentials")

//         var token = jwt.sign(user, process.env.AUTH_SECRET);
//         sendResponse(res, 200, {user, token}, false, "User Login Successfully" )

    
// })
// // router.post("/forgotPassword", (req,res)=>{})
// // router.post("/resetPassword", (req,res)=>{})
// export default router



import expres from "express";
import sendResponse from '../helpers/sendResponse.js'
const router = expres.Router()
import User from '../models/User.js'
import bcrypt from 'bcrypt';
import Joi from 'joi'
import jwt from 'jsonwebtoken';




const registerSchema = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(6).required(),
fullName: Joi.string().min(3),
});

const loginSchema = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(6).required(),
});




router.post("/register",async (req,res)=>{
try{
const {value, error} = registerSchema.validate(req.body)
if (error) return sendResponse(res, 404, null, true, error.message) 
const user = await User.findOne({email: value.email})
if(user) return sendResponse(res, 409, null,  true, "User already registered!")
const hashedpassowrd = await bcrypt.hash(value.password, 12)
console.log("hasedPassword", hashedpassowrd)
value.password = hashedpassowrd
let newUser = new User({...value})
newUser = await newUser.save()
sendResponse(res, 201, newUser, false, "User Registered Successfully!")
}catch(err){
return sendResponse(res, 500, null,  true, "Something went wrong while registering new user!")
}
})



router.post("/login", async (req,res)=>{
const {value, error}= loginSchema.validate(req.body)
if (error) return sendResponse(res, 404, null, true, error.message)
const user = await User.findOne({email: value.email}).lean()
if (!user) return sendResponse(res, 404, null, true, "User Not Registered!")
const isPasswordValid = bcrypt.compare(value.password, user.password)
if(!isPasswordValid) return sendResponse(res, 401, null, true, "Invalid Credentials!")
const token = jwt.sign(user, process.env.AUTH_SECRET)
console.log("token from login console=> ", token)
sendResponse(res, 200, {user, token}, false, "User Login Successfully!")

})






// router.post("/forgotPassword", (req,res)=>{})
// router.post("/ResetPassword", (req,res)=>{})

  export default router