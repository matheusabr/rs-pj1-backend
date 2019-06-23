const express = require('express')
import { PATH_TO_MONGO_CLUSTER } from '../private/api'
const mongoose = require('mongoose')

// Create a server
const app = express()

// Start Mongoose
mongoose.connect(PATH_TO_MONGO_CLUSTER, {
  useNewUrlParser: true
})

//  Define a middleware
// Access http://localhost:3333/?surname=Abreu
app.get('/', (req, res) => {
  return res.send(`Hola Matheus ${req.query.surname}!`)
})

// Set a backend port to listen
app.listen(3333)
