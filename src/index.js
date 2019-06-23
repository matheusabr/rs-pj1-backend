const express = require('express')
const api = require('../private/api')
const mongoose = require('mongoose')
const path = require('path')

// Create a server
const app = express()

// Start Mongoose
mongoose.connect(api.PATH_TO_MONGO_CLUSTER, {
  useNewUrlParser: true
})

// Define a router to refer to a local file
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

// Use routes
app.use(require('./routes'))

// Set a backend port to listen
app.listen(3333)
