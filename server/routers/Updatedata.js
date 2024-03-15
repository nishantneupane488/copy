const express= require('express')
const router= express.Router();
const UpdateData=require("../models/Tempupdate")
const bodyParser = require('body-parser')
const User_data =require("../models/UserData")


var jsonParser = bodyParser.json()
router.post("/update",jsonParser,async(req, res)=>{

    

    try {


        const filter = { phone:req.body.phone};
const update = { username:req.body.name,
address:req.body.address,email:req.body.email 
,
fromdate:req.body.fromdate};

// `doc` is the document _after_ `update` was applied because of
// `new: true`
let doc = await User_data.findOneAndUpdate(filter, update, {
  new: true
  
});
res.json({doc})
    } catch (error) {
        console.log(error)
    }
})


module.exports= router;