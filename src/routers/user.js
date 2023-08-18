const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/users', async (req,res)=>{
    const user = new User(req.body)
     try {
         await user.save()
         res.status(201).send(user)
     } catch (e){
         res.status(400).send(e)
     }
 // changed to async await above
 //    user.save().then(()=>{
 //         res.status(201).send(user)
 //    }).catch((error)=>{
 //         res.status(400)
 //         res.send(error)
 //    })
 })
 
 router.get('/users', async(req,res)=>{
     
     try{
         const users = await User.find({})
         res.status(200).send(users)
     }catch(e){
         res.status(500).send(e)
     }
     
     // User.find({}).then((users)=>{
     //     res.send(users)
     // }).catch((error)=>{
     //     res.status(500)
     //     res.send(error)
     // })
 })
 
 router.get('/users/:id', async (req,res)=>{
     const _id= req.params.id
     
     try{
         const userById = await User.findById(_id)
         if(!userById){
             return res.status(404).send()
         } else {
             res.status(200).send(userById)
         }
     }catch(e){
         res.status(500).send(e)
     }
 
     // User.findById(_id).then((user)=>{
     //     if(!user){
     //         return res.status(404).send()
     //     } else {
     //         res.status(200).send(user)
     //     }
     // }).catch((e)=>{
     //     res.status(500)
     //     res.send(e)
     // })
 })
 router.delete('/users/:id', async (req,res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.put('/users/:id', async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid operation'})
    }
    const _id= req.params.id;
    try{
        const user = await User.findByIdAndUpdate(_id, req.body , {new :true, runValidators:true})
        
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})
module.exports = router