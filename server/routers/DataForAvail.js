const express= require('express');
const router= express.Router();

const User_data=require("../models/UserData")

router.get("/bookedhotel",async (req,res)=>{


    try {
        const result=await User_data.find({})
         return res.json({result});
    } catch (error) {

        console.log({success:false})
        res.send({success:false});
    }
})

module.exports=router