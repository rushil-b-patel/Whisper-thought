import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken:{type:String,required:false},
})


const userModel = mongoose.model("User", userSchema);
export default userModel;