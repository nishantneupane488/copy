const express =require('express');
const router=express.Router();
const Modell=require("../models/Roommodel");
// imported because body sends text file it convert in json
const bodyParser = require('body-parser')



// this mothod of "body-parser"
var jsonParser = bodyParser.json()

// this import is for validation 
// const {body, validationResult } = require('express-validator');



router.post("/add_hotel",


jsonParser,


async (req,res)=>{

// console.log(req.body.room)
  

  
   try {
     await Modell.create({
        room:req.body.room,
        roomNo:req.body.roomNo,
        roomtype:req.body.roomtype,
        roomprice:req.body.roomprice,
        roomstatus:req.body.roomstatus,
        imgurl:req.body.imgurl,

    
        }).then(add_hotel=>(res.json(add_hotel)))
      // }).then(res.json(temp))
   } catch (error) {
    console.log(error)
    res.json({success:false})

   }
  
})
module.exports= router;