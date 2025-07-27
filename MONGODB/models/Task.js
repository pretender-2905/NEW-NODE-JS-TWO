import mongoose from 'mongoose'

const {Schema} = mongoose;

const newTask = new Schema(
    {
        task: String,
        completed: {type: Boolean, default: false}
    },
    
    {timestamps: true}
)

const   Task = mongoose.model("Tasks", newTask)
export default Task