const Post = require('../models/post')

//GET THE SPECIFIED POST
const getSpecificPost = id => {
  return new Promise((resolve, reject) => {
    Post.find({ _id: id }, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      console.log(data)
      resolve(data[0])
    })
  })
}

//GET POSTS WITH A TITLE THAT CONTAINS
const getTitleContain = contain => {
  //REVIEW  UNTESTED
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

// GET POST WITH THE EXACT OBJECT DESCRIPTOR
const getPost = payload => {
  return new Promise((resolve, reject) => {
    Post.find(payload, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      console.log(data)
      resolve(data[0])
    })
  })
}

//GET A GROUP OF POSTS IN A SPECIFIC PAGE IN THE PAGINATION
const getPagePost = page => {
  const numberOfPost = 10 // WILL GIVE A MAXIMUM OF 10 POST
  return new Promise((resolve, reject) => {
    Post.count({}, (err, count) => {
      Post.find({})
        .sort({
          datetime: -1,
          title: 1
        }) // SORT BY DATE (most recent), title (ascending)
        .skip((page - 1) * numberOfPost) // skips the first few pages (starting page = 1)
        .limit(numberOfPost)
        .exec((err, data) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          console.log(data)
          console.log(count)
          let api = {
            data: data,
            maxPage: Math.ceil(count / numberOfPost)
          }
          resolve(api)
        })
    })
  })
}

//ADDS POST WITH THE EXACT OBJECT PASSED
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

//UPDATE POST WITH SPECIFIED OBJECT PASSED
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
