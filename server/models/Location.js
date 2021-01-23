const mongoose = require('mongoose')

const Schema = mongoose.Schema
const locationSchema = new Schema({
    locationsData:Array
})

const Location = mongoose.model('locations', locationSchema)
module.exports = Location