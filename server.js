
const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const User = require('./server/models/User')
const api =require('./server/routes/api')
const bodyParser = require('body-parser')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.json())
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb://localhost/no-but-DB", { useNewUrlParser: true, useUnifiedTopology: true })


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})



app.use('/',api)


const port = 3001
app.listen(port,function(){
    console.log(`up and listenes on port ${port}`)
})
