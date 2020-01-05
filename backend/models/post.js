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
    overview: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
      //required: true
    },
    categories: {
      type: Array
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
  }],
    headerImageUrl: {
      type: String
    }
  },
  { collection: 'post', timestamps: { createdAt: 'datetime' } }
)

//timestamps: { createdAt: 'datetime' }
module.exports = mongoose.model('Post', postSchema)
