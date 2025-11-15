const SignupSchema = require("../Models/SignupSchema")

const postUser=async(req,res)=>{
    await SignupSchema.create(req.body)
    return res.status(201).json({
        status:201,
        message:"user created successfully"
    })
}

const getUsers=async(req,res)=>{
    const data=await SignupSchema.find()
    const totatlNumber=await SignupSchema.countDocuments()
    return res.status(200).json({
        count:totatlNumber,
        results:data
    })
}

module.exports={postUser,getUsers}