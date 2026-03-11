const {Sequelize}=require('sequelize')
const sequelize=new Sequelize(`bus_booking_system`,'root','aaaa',{
    host:"localhost",
    dialect:"mysql"
});

(async()=>{
    try{
await sequelize.authenticate()
console.log("Sequelize connected to db")
}
catch(err){
console.log(err)
}})()

module.exports=sequelize