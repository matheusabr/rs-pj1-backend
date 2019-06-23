const express = require('express')
// To handle multipart requests
const multer = require('multer')
// To handle file uploads
const uploadConfig = require('./config/upload')
// Constrollers
const PostController = require('./controllers/PostController')

const routes = new express.Router()
const upload = multer(uploadConfig)

/**
 * Basic requests:
 * GET - get a set of data
 * POST - add a new data
 * PUT - update data
 * DELETE - remove data
 */

// Access http://localhost:3333/?surname=Abreu
// routes.get('/', (req, res) => {
//   return res.send(`Hola Matheus ${req.query.surname}!`)
// })

// Bind controller to route
routes.post('/posts', upload.single('image'), PostController.store)

module.exports = routes
