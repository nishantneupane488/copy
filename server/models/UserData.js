const mongoose = require("mongoose")

const UserDataSchema=new mongoose.Schema({

room:{
    type:String,
    required:true
},
roomid2:{
    type:String,
    required:true
},

username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
},
fromdate:{
    type:String,
    required:true,
},
todate:{
    type:String,
    required:true

},
phone:{
    type:Number,
    required:true,
},
address:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true
},
imgurl:{
    type:String,
    required:true
}
})
const RoomDataModel= new mongoose.model('UserData',UserDataSchema);

module.exports=RoomDataModel;