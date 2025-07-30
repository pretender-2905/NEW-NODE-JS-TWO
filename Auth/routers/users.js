// import express from 'express';
// import sendResponse from '../helpers/sendResponse.js';
// import  authenticateUser  from '../middleware/authentication.js';
// import User from '../models/User.js';

// const router = express.Router();

// router.put('/', authenticateUser , async (req, res) => {
//   try {
//     const {city, country, dob} = req.body;
//     const user = await User.findOneAndUpdate(
//         {
//             _id: req.user._id,
//         },
//         {
//             city,
//             country,
//             dob,
//         },
//         {new : true}
//     ).exec(true)
//     sendResponse(res, 200, user, false, "User updated successfully")
//   } catch (err) {
//     console.log("error from users.js => ", err);
//     return sendResponse(res, 500, null, true, "Something went wrong...");
//   }
// });

// export default router;


import express from 'express'
import { authenticateUser, authenticateAdmin } from '../middleware/authentication.js';
import User from '../models/User.js'
import sendResponse from '../helpers/sendResponse.js'
const router = express.Router()

router.put("/", authenticateUser, async (req,res)=>{
try{
const {country, city} = req.body
const user = await User.findOneAndUpdate({_id : req.user._id},{country, city},{new: true}).exec(true)
sendResponse(res, 200, user, false, "User Updated Successfully!")
}catch(error){
console.log("error from users.js  => ", error)
sendResponse(res, 500, null, true, "Something went wrong!")
}
})


router.get("/myInfo", authenticateUser, async (req,res)=>{
try{
const user = await User.findOne({_id : req.user._id})
sendResponse(res, 200, user, false, "User Fetched Successfully!")
}catch(error){
console.log("error from users.js  => ", error)
sendResponse(res, 500, null, true, "Something went wrong in users.js!")
}
})
export default router