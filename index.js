const express = require('express');

const app = express();

app.get("/home",(req,res)=>{
    res.json({
        message:"Okay"
    })
})

app.listen(3000,()=>{
    console.log("Connected to the server");
})