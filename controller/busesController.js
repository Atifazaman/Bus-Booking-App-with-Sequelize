const buses = require('../models/buses')
const Buses=require('../models/buses')
const {Op}=require('sequelize')
const getAvailableSeats=async(req,res)=>{
    try{
        const {seats}=req.params
  const seatAvailable=await Buses.findAll({where:{
    available_seats:{
        [Op.gt]:seats
    }
  }})

  res.status(200).json(seatAvailable)
    }catch(err){
        res.status(500).send(err.message)
    }
  
}
const addBus=async(req,res)=>{
try{
const {busName,totalSeats,availableSeats}=req.body
const bus=await Buses.create({
    bus_name:busName,
    total_seats:totalSeats,
    available_seats:availableSeats
})
res.status(201).json(bus)
}catch(err){
     res.status(500).send(err.message)
}
}

module.exports={
    getAvailableSeats,addBus
}