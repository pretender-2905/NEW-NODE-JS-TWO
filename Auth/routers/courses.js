import express from 'express'
import sendResponse from '../helpers/sendResponse.js'
import Course from '../models/Course.js'
import { authenticateUser, authenticateAdmin } from '../middleware/authentication.js';


const router = express.Router()

router.get("/", authenticateUser, async (req, res) => {
    try {
        const course = await Course.find()
        sendResponse(res, 200, course, false, "Courses fetched successflly")
    } catch (err) {
        console.log("error in courses while GET=> ", err)
        sendResponse(res, 500, null, true, "Something went wrong while GET in courses.js")
    }
})


router.post("/", authenticateAdmin, async (req, res) => {
    try {
       let course = new Course(req.body)
        course = await course.save()
        sendResponse(res, 201, course, false, "Courses added successflly")
    } catch (err) {
        console.log("error in courses while POST=> ", err)
        sendResponse(res, 500, null, true, "Something went wrong while POST in courses.js")
    }
})
export default router