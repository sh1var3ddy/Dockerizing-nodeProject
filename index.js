const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/home",(req,res)=>{
    res.json({
        message:"Okay"
    })
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}...`);
})