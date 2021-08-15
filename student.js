const mongoose= require("mongoose")
const validator=require("validator");


const studentschema = new mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    phone:{
        type:Number,
        unique:true
    }
    
    
})


// we will create new collection

const student = new mongoose.model('Student',studentschema)

module.exports= student