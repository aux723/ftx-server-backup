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
   balance: {
       type:Number
   },
    email:{
        type:String,
        required: true 
    },
    phone:{
        type:String,
        required: true 
    },
    profit_p:{
        type:Number
    },
    password:{
        type:String,
        required: true 
    },
    dateRegistered:{
        type:Date,
        default:Date.now
    },
})

module.exports = User = mongoose.model('User', userschema)
