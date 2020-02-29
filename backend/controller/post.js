const Post = require('../models/post')

//GET THE SPECIFIED POST
const getSpecificPost = id => {
  return new Promise((resolve, reject) => {
    Post.find({ _id: id }, (err, data) => {
      if (err) {
        reject(err)
      } else if (data.length === 0 || typeof data == undefined) {
        // VALIDATION OF NON-EXISTING POST
        reject('No Such Post Exist')
      } else {
        resolve(data[0])
      }
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
const getPagePost = (page, numberOfPost, searchFilter) => {
  console.log(searchFilter)
  return new Promise((resolve, reject) => {
    let searchQuery = searchFilter ? { $text: { $search: searchFilter } } : {}
    let searchCount

    //IF THERE IS A SEARCH FILTER, SEARCH DEPENDING ON TEST SCORE, OTHERWISE LIST EVERYTHING
    // REQUIRES INDEX CREATION: db.post.createIndex({title:"text",overview:"text",content:"text",categories:"text"})
    Post.find(searchQuery, {
      content: 0,
      score: { $meta: 'textScore' }
    })
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
        Post.count(searchQuery, (err, count) => {
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
// ADD COMMENT
const addComment = (_id, payload) => {
  return new Promise((resolve, reject) => {
    getSpecificPost(_id).then(post => {
      post.comments.push(payload)
      post.save(function(err, question) {
        if (err) reject(err)
        else resolve(post)
      })
    })
  })
}

//GET ALL POSSIBLE VALUES OF CATEGORIES
const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    Post.distinct('categories', (err, result) => {
      if (err) reject(err)
      else resolve(result)
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
  updatePost,
  addComment,
  getAllCategories
}
