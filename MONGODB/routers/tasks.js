import express from "express";
const router = express.Router()

import sendResponse from '../helpers/sendResponse.js'
import Task from '../models/Task.js'
import mongoose from "mongoose";




router.post("/", async (req,res)=>{
    const {task} = req.body
    let newTask = new Task({ task })
    newTask = await newTask.save()

    sendResponse(res, 201, newTask, false, "Task added successfully") 
})

router.get("/", async (req, res)=>{
    const tasks = await Task.find()
    sendResponse(res, 200, tasks, false, "Tasks fetched successfully")
})

// router.get("/:id", async(req,res)=>{
//     const task =await Task.findById(req.params.id)
//     if(!task){
//         sendResponse(res, 404 , null , true, "Task Not Found")
//         return;
//     }
//     sendResponse(res, 200, task, false, "Task fetched successfully")
// })


router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            sendResponse(res, 404, null, true, "Task Not Found");
            return;
        }
        sendResponse(res, 200, task, false, "Task fetched successfully");
    } catch (error) {
        sendResponse(res, 400, null, true, "Invalid task ID format");
    }
});

router.put('/:id', async (req,res)=>{

        const {id} = req.params
        if (!mongoose.Types.ObjectId.isValid(id)){
            return sendResponse(res, 404, null, true, "Invalid ID, enter correct id to upadte");
        }
    
        const {task, completed} = req.body
        const taskFromDB = await Task.findById(id)
    
       
           
           if (task) taskFromDB.task = task;
           if (completed) taskFromDB.completed = completed
           await taskFromDB.save()
       
        sendResponse(res, 400, taskFromDB, true, "task updated successfully!");   
})

router.delete("/:id", async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return sendResponse(res, 404, null, true, "Invalid Id, Enter a valid ID to delete")
    }

    const taskFromDB = await Task.findById(id)

    await Task.deleteOne({_id : id })
    sendResponse(res, 200, null, false, "Task deleted successfully")
})




export default router