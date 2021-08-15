// const express = require("express")
// const app = express();
// const port =process.env.PORT || 8000;

// create a new students
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/studentsapi",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology: true 
    
}).then( ()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
})


// app.post("/students",(req,res)=>{
//     res.send("hello from.")
// })


// cls
