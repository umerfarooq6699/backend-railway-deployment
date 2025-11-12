const mongoose=require("mongoose")

const signupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("UserNewFormData",signupSchema)