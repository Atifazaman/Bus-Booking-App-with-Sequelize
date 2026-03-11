const {DataTypes}=require('sequelize')
const sequelize=require('../utils/db-connection')

const buses=sequelize.define('bus',{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
},
 bus_name:{
  type:DataTypes.STRING,
  allowNull:false
 }, 
 total_seats:{
  type:DataTypes.INTEGER,
  allowNull:false
 },
 available_seats:{
  type:DataTypes.INTEGER,
  allowNull:false
 }

})

module.exports=buses