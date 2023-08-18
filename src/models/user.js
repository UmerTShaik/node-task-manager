const mongoose = require('mongoose')
const validtor = require('validator')


const User = mongoose.model('User', {
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        trim:true,
        validate(value ){
            if(value < 6 || value.toLowerCase().includes('password')){
                throw new Error('Enter valid password')
            }
        }

    },
    email: {
        type:String, 
        required:true,
        trim:true,
        validate(value){
            if(!validtor.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be positive number')
            }
        }
    }
})

module.exports = User