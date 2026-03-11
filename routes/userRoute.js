const express=require('express')
const userRoute=express.Router()
const userController=require('../controller/userController')

userRoute.get("/",userController.retrievedAllUser)
userRoute.post("/",userController.addUser)


module.exports=userRoute