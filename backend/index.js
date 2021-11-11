// import express
// set up routes
// listen on port

const express = require('express')
const mongoose = require('mongoose')
const home = require('./routes/home')

const PORT = 8080
const app = express()

const user = `yao_quan`
const password = `4FXYF!m8AhA`
const db = `react-test`

mongoose.connect(`mongodb+srv://${user}:${password}@react-test.cxmrc.mongodb.net/${db}?retryWrites=true&w=majority`)
const connection = mongoose.connection

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', home)
  
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})