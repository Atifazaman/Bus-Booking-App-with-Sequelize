const express=require('express')
const app=express()
const db=require('./utils/db-connection')
const busesModel=require('./models/buses')
const useModel=require('./models/users')
const userRoute=require('./routes/userRoute')
const busRoute=require('./routes/busesRoute')


app.use(express.json())
app.use("/users",userRoute)
app.use("/buses",busRoute)

db.sync({force:false}).then(()=>{
    app.listen(3000,()=>{
    console.log("Server is running")
})
}).catch((err)=>{
    console.log(err)
})
