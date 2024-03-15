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

const RoomModel= new mongoose.model('RoomsData_2',roomSchema);

// use this model if you wanted to store data in different collention 
// if you want to insert into previoulsy existing collection then use model which is 
// already made . And already made collection is (Roommodel).

module.exports=RoomModel;