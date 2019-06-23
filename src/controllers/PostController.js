/**
 * Business logics
 */
const Post = require('../models/Post')

/**
 * Execute async functions
 * Runs as a middleware
 */
module.exports = {
  async index(req, res) {},
  // Add posts to db
  async store(req, res) {
    // console.log('req.body', req.body)
    // console.log('req.file', req.file)
    return res.json({ ok: true })
  }
}
