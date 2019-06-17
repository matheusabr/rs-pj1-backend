const express = require('express')

// Create a server
const app = express()

/**
 * Basic requests:
 * GET - get a set of data
 * POST - add a new data
 * PUT - update data
 * DELETE - remove data
 */

//  Define a middleware
// Access http://localhost:3333/?surname=Abreu
app.get('/', (req, res) => {
  return res.send(`Root request: Hello Matheus ${req.query.surname}!`)
})

// Set a backend port to listen
app.listen(3333)
