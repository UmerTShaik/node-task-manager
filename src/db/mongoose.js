const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')





// const task1 = new Tasks1({
//     description:'Describes the task' ,
//     completed: true
// })

// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log('Error',error)
// })

// const me = new User({
//     name:'   Lenin  ',
//     password: 'password',
//     email: 'mike@mine.com'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })