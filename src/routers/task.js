const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


router.get('/tasks', async (req,res) => {

    try{
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch(e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((tasks)=>{
    //     res.status(200).send(tasks)
    // }).catch((error)=>{
    //     res.status(500).send(error)
    // })
})

router.get('/tasks/:id', async(req,res)=>{
    const _id= req.params.id;
    
    try{
        const task = await Task.findById(_id)
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
    // Task.findById(_id).then((task)=>{
    //     res.status(200).send(task)
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })
})


router.post('/tasks', async(req,res)=>{
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }
    // task.save().then(()=>{
    //      res.status(201).send(task)
    // }).catch((error)=>{
    //      res.status(400)
    //      res.send(error)
    // })
 })

 router.delete('/tasks/:id', async(req,res) => {

    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.send(404).send()
        }
        res.send(task)
    } catch(e){
        res.status(500).send(e)
    }
})

router.put('/tasks/:id', async(req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid operation'})
    }
    try{
        const task  = await Task.findByIdAndUpdate(req.params.id, req.body , {new:true , runValidators:true})
        //if(!task){
       //     return res.status(404).send()
       // }
         res.send(task)
    }catch(e){
        res.send(400).send(e)
}

})
module.exports = router