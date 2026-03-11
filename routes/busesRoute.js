const express=require('express')
const userRoute=express.Router()
const busController=require('../controller/busesController')
const buses = require('../models/buses')

userRoute.get("/available/:seats",busController.getAvailableSeats)
userRoute.post("/",busController.addBus)


module.exports=userRoute