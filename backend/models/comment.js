const mongoose = require('mongoose')
let commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})
commentSchema.method('update', function(updates, callback) {
  Object.assign(this, updates, { updatedAt: new Date() })
  this.save(callback)
})
commentSchema.statics.getComment = function(request, response, next, id) {
  return new Promise(async (resolve, reject) => {
    const doc = await Comment.findById(id)
    resolve(doc)
  })
}
var Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
