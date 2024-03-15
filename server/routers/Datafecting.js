const express= require('express');
const router= express.Router();


// this line mean we are requireing the MODELES(Schema) 
// for the type of data you want to fetch .
const Room= require('../models/Roommodel')
//  this first end point Api and the name of end-point
// is getalldata
router.get("/getallrooms", async(req, res)=>{


    try {
        const rooms= await Room.find({})
        // console.log(rooms);
        return res.json({rooms});
    } catch (error) {
        console.log("yaha galti hai ")
        return res.status(400).json({message:error});   
    }
})

module.exports= router;