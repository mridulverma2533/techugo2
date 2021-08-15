const express = require("express")
require("./cnn.js")
const Student = require("./student.js")
const app = express();
const port =process.env.PORT || 8000;

app.use(express.json());

app.post("/students",(req,res)=>{
    console.log(req.body)

    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
    
    
})

app.listen(port,(req,res)=>{
    console.log(`listining port ${port}`)
})
