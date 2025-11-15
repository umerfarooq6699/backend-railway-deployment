const SignupSchema = require("../Models/SignupSchema")

const postUser=async(req,res)=>{
    await SignupSchema.create(req.body)
    return res.status(201).json({
        status:201,
        message:"user created successfully"
    })
}

const signinController=async(req,res)=>{

    const user=await SignupSchema.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({
            status:400,
            message:"Invalid email or password",
        })
    }
    
    if(user.password!=req.body.password){
        return res.status(400).json({
            status:400,
            message:"Invalid email or password",
        })
    }

    return res.status(200).json({
        status:200,
        message:"Login successful",
        user:user
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

module.exports={postUser,getUsers,signinController}