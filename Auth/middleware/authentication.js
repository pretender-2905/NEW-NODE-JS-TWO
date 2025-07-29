// import express from 'express';
// import sendResponse from '../helpers/sendResponse.js';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const router = express.Router();

// export async function authenticateUser(req, res, next){
//   try {
//     console.log("authorization token=> ", req.headers.authorization);
    
//     const bearerToken = req?.headers?.authorization;
//     const token = bearerToken?.split(' ')[1];

//     if (!token) {
//       return sendResponse(res, 403, null, true, "Token not provided!");
//     }

//     const decoded = jwt.verify(token, process.env.AUTH_SECRET);

//     if (decoded) {
//         const user = await User.findById(decoded._id)
//         if (!user) return sendResponse(res, 403, null, true, "User not found");
//       req.user = decoded;
//       next();
//     } else {
//      return sendResponse(res, 500, null, true, "Something went wrong...");
//     }

//   } catch (err) {
//     console.error(err);
//     return sendResponse(res, 500, null, true, "Something went wrong...");
//   }
// }

// export default router;
