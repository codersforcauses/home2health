const mongoose = require('mongoose')
let commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });
let postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    overview: {
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
      type: [commentSchema]
    },
    headerImageUrl: {
      type: String
    }
  },
  { collection: 'post', timestamps: { createdAt: 'datetime' } }
)

//timestamps: { createdAt: 'datetime' }
module.exports = mongoose.model('Post', postSchema)
