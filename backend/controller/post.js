const Post = require('../models/post')

const getSpecificPost = id => {
  return new Promise((resolve, reject) => {
    Post.find({ _id: id }, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      console.log(data)
      resolve(data)
    })
  })
}

const getTitleContain = contain => {
  return new Promise((resolve, reject) => {
    Post.find({ title: /.*contain.*/ }, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      console.log(data)
      resolve(data)
    })
  })
}

const getPost = _id => {
  return new Promise((resolve, reject) => {
    Post.find({ _id }, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      console.log(data)
      resolve(data)
    })
  })
}

const getPagePost = page => {
  const numberOfPost = 10 // WILL GIVE A MAXIMUM OF 10 POST
  return new Promise((resolve, reject) => {
    Post.find({})
      .sort({ datetime: -1, title: 1 }) // SORT BY DATE (most recent), title (ascending)
      .skip((page - 1) * numberOfPost) // skips the first few pages (starting page = 1)
      .limit(numberOfPost)
      .exec((err, data) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        console.log(data)
        resolve(data)
      })
  })
}

const addPost = payload => {
  let post = new Post(payload)

  return new Promise((resolve, reject) => {
    post.save((err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const deletePost = _id => {
  return new Promise((resolve, reject) => {
    Post.deleteOne({ _id }, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const updatePost = (_id, payload) => {
  return new Promise((resolve, reject) => {
    Post.update({ _id }, { $set: payload }, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  getPost,
  getPagePost,
  getSpecificPost,
  getTitleContain,
  addPost,
  addComment,
  deletePost,
  updatePost
}
