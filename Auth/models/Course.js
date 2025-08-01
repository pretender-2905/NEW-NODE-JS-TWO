import mongoose from "mongoose";
const {Schema} = mongoose

const courseSchema = new Schema(
    {
        "title" : {type:String},
        "description": {type:String, default: ""},
        "thumbnail": {type: String} 
    }
)

const Course = mongoose.model("Courses", courseSchema)
export default Course