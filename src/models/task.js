const mongoose = require('mongoose')

const Task = mongoose.model('Tasks1',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = Task