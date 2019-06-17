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
app.get('/', (req, res) => {
  return res.send('Root request: Hello Matheus!')
})

// Set a backend port to listen
app.listen(3333)
