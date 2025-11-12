const express=require("express")
const { postUser, getUsers } = require("../Controllers/userControllers")
const router=express.Router()

router.post("/user_signup",postUser)
router.get("/get_allusers",getUsers)

module.exports=router