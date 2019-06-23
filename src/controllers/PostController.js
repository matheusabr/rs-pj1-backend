/**
 * Business logics
 */
const Post = require('../models/Post')

/**
 * Execute async functions
 * Runs as a middleware
 */
module.exports = {
  async index(req, res) {
    // Get posts in descending order
    const posts = await Post.find().sort('-createdAt')

    res.json(posts)
  },
  // Add posts to db
  async store(req, res) {
    const { author, place, description, hashtags } = req.body
    const { filename: image } = req.file
    // Save to DB
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    })
    // Return response
    return res.json(post)
  }
}
