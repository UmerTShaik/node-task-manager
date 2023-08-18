require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('64d56795a738007fed8205b5').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:true})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

const deleteById = async(id)=>{
    const delUser = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:true})
    return count;
}

deleteById('64d56795a738007fed8205b5').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})