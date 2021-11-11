const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    age: {
        type: Number
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User