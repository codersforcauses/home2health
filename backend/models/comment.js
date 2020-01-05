const mongoose = require('mongoose')
let commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
      //required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Post',
        required: true
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });
module.exports = mongoose.model('Comment', commentSchema)