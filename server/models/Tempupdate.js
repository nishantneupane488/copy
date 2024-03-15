const mongoose=require('mongoose')

const tempUpdate= new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true
 },
 address:{
    type:String,
    required:true
 }

})
const TempUpdate=new mongoose.model("tempUpdate",tempUpdate)

module.exports=TempUpdate