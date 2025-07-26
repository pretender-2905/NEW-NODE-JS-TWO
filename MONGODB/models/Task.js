import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        task: String,
        completed: { type: Boolean, default: false }
    },
    { timestamps: true } //handle date
);

const Task = mongoose.model("Tasks", taskSchema)

export default Task