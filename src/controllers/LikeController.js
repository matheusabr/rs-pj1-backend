/**
 * Business logics
 */
const Post = require('../models/Post')

/**
 * Execute async functions
 * Runs as a middleware
 */
module.exports = {
  // Add to db
  async store(req, res) {
    // Get post by id
    const post = await Post.findById(req.params.id)

    post.likes += 1

    await post.save()

    // Realtime dispatch to all client listeners
    req.io.emit('like', post)

    return res.json(post)
  }
}
