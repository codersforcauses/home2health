const mongoose = require('mongoose')

let postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date
    },
    categories: {
      type: Array
    },
    comments: {
      type: Array
    }
  },
  { collection: 'post', timestamps: { createdAt: 'datetime' } }
)
//timestamps: { createdAt: 'datetime' }
module.exports = mongoose.model('Post', postSchema)
