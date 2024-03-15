const express= require("express");
const mongodb =require("mongodb")
const router= express.Router();
const bodyParser = require('body-parser')
const USER_data=  require('../models/UserData')


var jsonParser = bodyParser.json()

router.post("/cancel", jsonParser,async (req,res)=>{

//  req.body.email

    console.log(req.body.email)
  
    try {
        const result= await USER_data.deleteOne({email:req.body.email})
        // const result= await USER_data.deleteOne({phone:phone})
            res.json({result})
    } catch (error) {
        console.log(error)
    }
})


// router.update("/update", async(req,res)=>{
//     try {
//         const resultupdate=USER_data.put
//     } catch (error) {
        
//     }
// })
module.exports= router;

