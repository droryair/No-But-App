const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String,
    location: String,
    // img: Image, //??
    email: String,
    challengesType: Array
})

const User = mongoose.model('user', userSchema)
module.exports = User