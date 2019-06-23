const express = require('express')
const api = require('../private/api')
const mongoose = require('mongoose')

// Create a server
const app = express()

// Start Mongoose
mongoose.connect(api.PATH_TO_MONGO_CLUSTER, {
  useNewUrlParser: true
})

// Use routes
app.use(require('./routes'))

// Set a backend port to listen
app.listen(3333)
