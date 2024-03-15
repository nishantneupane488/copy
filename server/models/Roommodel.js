const mongoose = require('mongoose');

const roomSchema= new mongoose.Schema({

    room :{
        type:String,
        required: true
    },
    roomNo :{
        type:Number,
        required: true
    },
    roomtype :{
        type:String,
        required: true
    },
    roomprice :{
        type:Number,
        required: true
    },
    roomstatus :{
        type:Number,
        required: true
    },
     imgurl :{
        type:String,
        required: true
    }
})

const RoomModel= new mongoose.model('RoomsData',roomSchema);


// const getdata=async()=>{
//     const result =await RoomModel.find();
//     console.log(result);   
// }
// getdata();
module.exports=RoomModel;