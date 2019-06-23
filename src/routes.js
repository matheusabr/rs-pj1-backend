const express = require('express')
// Constrollers
const PostController = require('./controllers/PostController')

const routes = new express.Router()

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
routes.post('/posts', PostController.store)

module.exports = routes
