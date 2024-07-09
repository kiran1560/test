//Implement an Express.js route that allows an authenticated user (identified by userId from JWT) to update their password securely using bcrypt for hashing.  
//express, jwt, bcrypt 

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken=(payload)=>{
    let token = jwt.sign(payload, process.env.KEY);
    return token;
}

login.post('/login',async(req,res)=>{
    let user = req.body;
    let result = user.password

    if(result.length<=0){
        res.json({msg:"not found"})
    }
    else{
        let response = await bcrypt.compare(user.password, result.password);

 if(response){
    let accessToken = generateToken(user);
user.accessToken = accessToken;

res.json({msg:"Login success", userData:user})
        }
else{
            res.json({msg:"login failed"}) }
    }
})

module.exports = login;