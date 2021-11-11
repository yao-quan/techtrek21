const express = require('express')
const user = require('../models/users')

let app = express.Router()

app.get('/home', (req, res) => {
    user.find({}).then(result => {
        res.send(result)
    })
})

module.exports = app