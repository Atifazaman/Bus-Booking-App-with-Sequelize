const User=require('../models/users')

const addUser=async(req,res)=>{
try{
const {name,email}=req.body
const user=await User.create({
    name:name,
    email:email
})
res.status(201).json(user)
}catch(err){
res.status(500).send(err.message)
}
}
const retrievedAllUser=async(req,res)=>{
    try{
    const users=await User.findAll()
    res.status(200).json(users)
    }catch(err){
     res.status(500).send(err.message)   
    }
}

module.exports={
    addUser,
    retrievedAllUser
}