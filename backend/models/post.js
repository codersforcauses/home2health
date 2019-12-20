const mongoose = require('mongoose')

let postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    previewDetails: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    categories: {
      type: Array
    },
    comments: {
      type: Array
    },
    headerImageUrl: {
      type: String
    }
  },
  { collection: 'post', timestamps: { createdAt: 'datetime' } }
)
//timestamps: { createdAt: 'datetime' }
module.exports = mongoose.model('Post', postSchema)
