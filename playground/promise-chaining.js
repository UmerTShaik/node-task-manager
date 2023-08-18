require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('64dce7310369321e16a8f43e', {age:1}).then((user)=>{
        console.log(user)
        return User.countDocuments({ age:1 })
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

const updateAgeandCount = async (id, age) => { 
    const user = await User.findByIdAndUpdate(id, { age : age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('64dce7310369321e16a8f43e', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})