var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  imagePath: String
})
// authenticate input against database documents
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email }).exec(function(error, user) {
    if (error) {
      return callback(error)
    } else if (!user) {
      var err = new Error('User not found.')
      err.status = 404
      return callback(err)
    }
    bcrypt.compare(password, user.password, function(error, result) {
      if (result === true) {
        return callback(null, user)
      } else {
        return callback()
      }
    })
  })
}
// hash password before saving to database
UserSchema.pre('save', function(next) {
  var user = this
  if (user.isNew) {
    bcrypt.hash(user.password, 10, function(err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  } else {
    next()
  }
})

UserSchema.statics.getUser = function(request, response, next, id) {
  return new Promise(async (resolve, reject) => {
    const doc = await User.findById(id)
    resolve(doc)
  })
}
UserSchema.statics.getCurrentUser = function(request, response, next) {
  return new Promise(async (resolve, reject) => {
    const doc = await User.findById(request.session.userId)
    if (!doc) {
      err = new Error('User Not Found')
      err.status = 404
      reject(err)
    }
    resolve(doc)
  })
}
var User = mongoose.model('User', UserSchema)
module.exports = User
