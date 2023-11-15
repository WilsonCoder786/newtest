import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name: String,
    description: String,
})

if(mongoose.models["users"]){
    delete mongoose.models["users"]

}

export const USERMODEL =mongoose.model("users",userSchema)