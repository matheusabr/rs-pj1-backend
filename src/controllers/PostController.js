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
    return res.json({ ok: true })
  }
}
