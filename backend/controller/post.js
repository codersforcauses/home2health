const Post = require('../models/post')

//GET THE SPECIFIED POST
const getSpecificPost = id => {
  return new Promise((resolve, reject) => {
    Post.find({ _id: id }, (err, data) => {
      if (err) {
        reject(err)
      } else if (data.length === 0) {
        reject('No Such Post Exist')
      }
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
        reject(err)
      }
      resolve(data)
    })
  })
}

// GET POST WITH THE EXACT OBJECT DESCRIPTOR
const getPost = payload => {
  return new Promise((resolve, reject) => {
    Post.find(payload, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data[0])
    })
  })
}

//GET A GROUP OF POSTS IN A SPECIFIC PAGE IN THE PAGINATION
const getPagePost = (page, numberOfPost) => {
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
            reject(err)
          }
          let api = {
            data,
            maxPage: Math.ceil(count / numberOfPost),
            numberOfPost
          }
          resolve(api)
        })
    })
  })
}

//ADDS POST WITH THE EXACT OBJECT PASSED
const addPost = payload => {
  // PAYLOAD VALIDATION
  return new Promise((resolve, reject) => {
    // STUB
    let post
    try {
      post = new Post(payload)
    } catch (error) {
      reject(error)
    }

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
  deletePost,
  updatePost
}
