const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
router.post('/login',async(req,res)=>{
    const {username,password}= req.body
    try{
        const user=await User.findOne({username});
        if(!user){
            console.log("User not found")
            return res.status(404).json({error:'User not found'});
        }

        if(password!=user.password){
            console.log("Incorrect password")
            return res.status(401).json({error:'Invalid password'})
        }

        let role;
        if (user.username === 'admin') {
        role = 'Admin';
        } else if (user.username === 'clubhead') {
        role = 'Clubhead';
        } else {
        role = 'User'; // Default role
        }
        const token = jwt.sign({ username: user.username ,role}, 'secret', { expiresIn: '1h' });
        res.json({ token,role,success:'true' });

    }
    catch(error){
        console.error(error.message);
        res.send("server Error");

    }
});
module.exports=router;