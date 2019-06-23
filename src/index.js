const express = require('express')
const api = require('../private/api')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

// Create a server
const app = express()

/**
 * Split servers by protocols:
 * http and websocket (realtime db)
 */
const server = require('http').Server(app)
const io = require('socket.io')(Server)

// Start Mongoose
mongoose.connect(api.PATH_TO_MONGO_CLUSTER, {
  useNewUrlParser: true
})

/**
 * Share websocket io to all middlewares
 * by io injection before the destination route
 * Note: Use next to reemit request
 */
app.use((req, res, next) => {
  req.io = io

  next()
})

// Turn api services acessible to external apps
app.use(cors())

// Define a router to refer to a local file
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

// Use routes
app.use(require('./routes'))

// Set a backend port to listen
server.listen(3333)
