const express=require("express")
const { postUser, getUsers, signinController } = require("../Controllers/userControllers")
const router=express.Router()

router.post("/signup",postUser)
router.post("/signin",signinController)
router.get("/get_allusers",getUsers)

module.exports=router