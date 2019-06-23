/**
 * Business logics
 */
const Post = require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

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
  // Add to db
  async store(req, res) {
    const { author, place, description, hashtags } = req.body
    const { filename: image } = req.file

    // Resize image file
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'resized', image))

    // Remove original image file
    fs.unlinkSync(req.file.path)

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
