const express=require("express")
const app=express()
const dbConnection=require("./Config/db")
const userRouters=require("./Routes/userRouter")
const dotenv=require("dotenv")
dotenv.config()

app.use(express.json())
dbConnection()

app.get("/",(req,res)=>{
    const object={
        name:"umer",
        age:25
    }
    res.send(object)
})

app.use("/api",userRouters)

app.listen(5000,(req,res)=>{
    console.log("server is running at 5000 port")
})