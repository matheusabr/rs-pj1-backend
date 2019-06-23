/**
 * DB table representation
 */
const mongoose = require('mongoose')

/**
 * Using timestamp: true
 * we enable DB to register:
 * createdAt and updatedAt
 */
const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', PostSchema)
