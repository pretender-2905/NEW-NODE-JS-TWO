// import express from 'express';
// import sendResponse from '../helpers/sendResponse.js';
// import { authenticateUser } from '../middleware/authentication.js';
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
//     console.error("error from users.js => ", err);
//     return sendResponse(res, 500, null, true, "Something went wrong...");
//   }
// });

// export default router;
