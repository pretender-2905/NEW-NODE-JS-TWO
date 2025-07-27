import express from 'express'
import sendResponse from '../helpers/sendResponse.js'
import Task from '../models/Task.js'
import mongoose from 'mongoose'



const router = express.Router()



router.post('/', async (req,res)=>{
    try{
        const {task} = req.body

        if(!task){
            return sendResponse(res, 404, null, true, "Enter the task!")
        }

    const newTask = new Task({task})
    await newTask.save()

    sendResponse(res, 201, newTask, false, "Task Successfully added")
    }catch{
        sendResponse(res, 500, null, true, "Something went wrong in adding task")
    }
})

router.get("/", async (req,res)=>{
    try{
        const alltask = await Task.find()
    if(!alltask || alltask.length === 0){
        return sendResponse(res, 404, null ,true, "No Task Available!")

    }
          sendResponse(res, 200, alltask, false, "Tasks fetched successfully")
    }catch{
         sendResponse(res, 500, null ,true, "Some thing went wrong while fetching task!")
    }
})


router.get("/:id", async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return sendResponse(res, 404, null ,true, "Invalid ID!")
    }
    try{
        const singleTask = await Task.findById(id)
        sendResponse(res, 200, singleTask, false, "Single task fetched successfully!")
    }catch{
        sendResponse(res, 500, null ,true, "Some thing went wrong while fetching single task!")
    }
})

router.put("/:id", async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return sendResponse(res, 404, null ,true, "Invalid ID!")
    }

    try{
        const {task, completed} = req.body
        const taskForUpdate = await Task.findById(id)
        const updatedTask = taskForUpdate
        updatedTask.task = task
        updatedTask.completed = completed
        sendResponse(res, 200, updatedTask, false, "task updated successfully")
        await updatedTask.save()
    }catch{
        sendResponse(res, 500, null, true, "somthing went wrong while updating task")
    }
} )


router.delete("/:id", async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return sendResponse(res, 404, null, true, "Invalid ID")
    }

    try{
        const taskForDelete = await Task.findById(id)
        await Task.deleteOne(taskForDelete)
        sendResponse(res, 200, null, false, "Data deleted Successfully!")
    }catch{
        sendResponse(res, 500, null, true, "Something went wrong while deleting!")
    }
})

export default router