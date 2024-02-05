const mongoose = require("mongoose")

const pinSchema = new mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number, min:0, max:5},
    lat: {type: Number, required: true},
    long: {type: Number, required: true},
}, {timestamps: true})

const Pin = mongoose.model('Pin', pinSchema, 'pins')
module.exports = Pin