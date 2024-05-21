const express=require('express');
const router=express.Router();
const events=require('../models/Event');
router.get('/fetch',async(req,res)=>{
    try {
      const user=await events.find({});
      //console.log(user);
      res.json({success :true,user}); 
      } catch {
        res.json({ success: false });
      }
})

module.exports=router;