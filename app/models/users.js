const mongoose = require('mongoose')
let Schema = mongoose.Schema
var userSchema = new Schema({
    username:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    }
})

module.exports = mongoose.model('Users',userSchema)