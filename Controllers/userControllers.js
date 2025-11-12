const SignupSchema = require("../Models/SignupSchema")

const postUser=async(req,res)=>{
    await SignupSchema.create({
        name:"umer",
        age:25
    })
    res.send({message:"user created successfully"})
}

const getUsers=async(req,res)=>{
    const data=await SignupSchema.find()
    console.log(data)
    res.send(data)
}

module.exports={postUser,getUsers}