const mongoose=require('mongoose')
const Schema=mongoose.Schema

const User=new Schema({
    username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:200
    },
    password:{
        type:String,
        required:true,
        minlength:3,
        maxlength:200
    },
})
 module.exports=mongoose.model('Users',User)