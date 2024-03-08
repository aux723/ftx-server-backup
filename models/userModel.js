const mongoose = require ('mongoose');
const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true 
    },
    balance:Number,
    email:{
        type:String,
        required: true 
    },
    phone:{
        type:String,
        required: true 
    },
    password:{
        type:String,
        required: true 
    },
    dateRegistered:{
        type:Date,
        default:Date.now
    },
    profit:{
        type:Number,
        default:'false'
    }
})

module.exports = User = mongoose.model('User', userschema)
