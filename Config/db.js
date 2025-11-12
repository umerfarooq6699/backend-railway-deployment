const mongoose=require("mongoose")

const dbConnection=async ()=>{
    const res=await mongoose.connect(process.env.URL)
    if(res){
        console.log("db connected successfully")
    }else{
        console.log("connectioin failed")
    }
}

module.exports=dbConnection