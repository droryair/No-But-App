const express = require('express')
const User = require('../models/User')
const router = express.Router()




router.get("/users", async function(req,res){
    try{
      const users = await User.find({})
      res.send(users)
    }catch(err){
      console.log(err)
      res.send(err)
    }
  })

  router.post("/user", async function(req,res){
    try{
      const user = new User(req.body)
      await user.save()
      res.status(200).send(user)
    }catch(err){
      console.log(err)
      res.status(400).send("Error in the server")
    }
  })

  router.get(`/user/:userName`, async function(req,res){
    const userName = req.params.userName
    const user = await User.find({name:userName})
    if (user.length>=1){
      res.status(200).send(user)
    }else{
      res.status(404).send("user not found")
    }
  })

  // router.post("/activity", async function(req,res){
  //   try{
  //     console.log(req.body)
  //     const data = req.body
  //     const activity = new Activity( {
  //       title:data.title,
  //       content: data.content,
  //       date:Date.now()
  //     })
  //     await activity.save()
  //     res.send(activity)
  //   }
  //   catch(err){
  //     res.send(err)
  //   }
  // })
  




module.exports = router