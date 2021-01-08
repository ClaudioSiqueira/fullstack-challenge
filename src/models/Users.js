const mongoose = require('../database/connection')

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    participation:{
        type:String,
        required:true
    }
})

const User = mongoose.model('cotaboxChallenge', usersSchema)

module.exports = User