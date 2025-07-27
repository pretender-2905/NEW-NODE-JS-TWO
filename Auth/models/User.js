
import mongoose from 'mongoose'

 const {Schema} = mongoose;
 const userSchema = new Schema(
    
    {
       
        email: {type: String , required:true, unique: true},
        password: {type: String , required:true},
        fullName: {type: String},
        country: {type: String},
        city:{type: String},
        gender:{type: String, enum:["female", "male"]},
        dob: {type: String},
        isProfileCompleted: {type: Boolean}
    },
    {timestamps: true}  
)
const User = mongoose.model("users", userSchema)
export default User