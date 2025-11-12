const express=require("express")
const app=express()
const dbConnection=require("./Config/db")
const userRouters=require("./Routes/userRouter")
const dotenv=require("dotenv")
dotenv.config()

const port=process.env.PORT || 5000

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

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});