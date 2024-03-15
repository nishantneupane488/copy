const express= require("express");
const router= express.Router();
const bodyParser = require('body-parser')
const USER_data=  require('../models/UserData')

// const { body, validationResult } = require('express-validator');

var jsonParser = bodyParser.json()


 const justy=bodyParser.urlencoded({ extended: true })
// endpoint for userdata

router.post("/user_data",

jsonParser




 ,async(req,res)=>{


try {
   const tt=  await USER_data.create({
        room:req.body.room,
    
        roomid2:req.body.roomidfromfront,
        username:req.body.username,
        email:req.body.email,
        fromdate:req.body.fromdate,
        todate:req.body.todate,
        phone:req.body.phone,
        address:req.body.address,
        price:req.body.price,
        imgurl:req.body.imgurl,
        // req.body
        // room:"d",
        // roomid:998,
        // username:"ds",
        // email:"sds",
        // fromdate:"DD-MM-YYYY",
        // todate:"DD-MM-YYYY",
        // phone:998786,
        // address:"daaaaaaa",
        // price:876,
        // imgurl:"dssdsdfad"

         
        })
        .then(user_data=>(res.json(user_data)))
        // res.json({success:true});
        // console.log(username);
        // .then(user_data=>(res.json(user_data)))
    // console.log(tt);
    // res.json(tt)
} catch (error) {
    console.log(error)
    res.json({success:false})

}

})

module.exports= router;