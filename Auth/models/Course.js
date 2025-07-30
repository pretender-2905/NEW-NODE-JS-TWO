import mongoose from "mongoose";
const {Schema} = mongoose

const courseSchema = new Schema(
    {
        "Title" : {type:String},
        "description": {type:String, default: ""},
        "Thumbnail": {type: String} 
    }
)

const Course = mongoose.model("Courses", courseSchema)
export default Course