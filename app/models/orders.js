const mongoose = require('mongoose')
let Schema = mongoose.Schema
const User = require('./users');

var orderSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    number:{
        type:Number
    },
    due_date:{
        type:Date,
        default:Date.now()
    },
    customer_name:{
        type:String,
        default:''
    },
    customer_address:{
        type:String,
        default:''
    },
    customer_phone:{
        type:String,
        default:''
    },
    total:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('Orders',orderSchema)