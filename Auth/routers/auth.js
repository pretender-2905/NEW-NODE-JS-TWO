import express from 'express'
const router = express.Router()
import User from '../models/User.js'
import sendResponse from '../helpers/sendResponse.js'
import Joi from 'joi';
import bcrypt from 'bcrypt'

const registerSchema = Joi.object({
     email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6),
    fullName: Joi.string().alphanum().min(3).max(30).required(),
});

router.post("/register", async (req,res)=>{
    const {value, error} = registerSchema.validate(req.body)
    console.log("error", error?.message)
    if(error){
        return sendResponse(res, 404, null, true, error.message)
    }
    const user = await User.findOne({email: value.email})
    if(user) return sendResponse(res, 403, null , true, "User with this email already registered")
    console.log("value", value)
    
    const hashedPassword = await bcrypt.hash(value.password, 12)
console.log("hasedpassowrd=> ", hashedPassword)
value.password = hashedPassword
   let newUser = new User({...value})
   
    newUser = await newUser.save()
    sendResponse(res, 201, newUser, false, "User registered successfully!!")

})
    
// router.post("/login", (req,res)=>{
    
// })
// router.post("/forgotPassword", (req,res)=>{})
// router.post("/resetPassword", (req,res)=>{})
export default router