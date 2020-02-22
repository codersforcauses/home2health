let express = require('express')
let router = express.Router()
const controllerPost = require('../controller/post')
const Post = require('../models/post')
const Comment = require('../models/comment')
const User = require('../models/user')
let mid = require('../middleware')
let mongoose = require('mongoose')
/*
  Post.js is used to find the specific post to display in post page (GET)
  
  It is also used to create new posts (POST)
*/

router.param('_pid', function(req, res, next, id) {
  Post.findById(id, function(err, doc) {
    if (err) return next(err)
    if (!doc) {
      err = new Error('Post Not Found')
      err.status = 404
      return next(err)
    }
    req.post = doc
    return next()
  })
})
router.param('_cid', function(req, res, next, id) {
  Comment.findById(id, function(err, doc) {
    if (err) return next(err)
    if (!doc) {
      err = new Error('Comment Not Found')
      err.status = 404
      return next(err)
    }
    req.comment = doc
    return next()
  })
})

// GET posts for specific pages
router.get('/', (request, response, next) => {
  const numberOfPost = 10 // WILL GIVE A MAXIMUM OF 10 POST
  const page = request.query.page
  controllerPost
    .getPagePost(page, numberOfPost, request.query.searchFilter)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// GET THE DETAILS OF SPECIFIC POST
router.get('/:_pid', async (request, response, next) => {
  let body = request.post.toObject()
  const user = await User.getUser(request, response, next, request.post.author)
  for (let i = 0; i < body.comments.length; i++) {
    const comment = await Comment.getComment(
      request,
      response,
      next,
      body.comments[i]
    )
    body.comments[i] = comment.toObject()
    const author = await User.getUser(
      request,
      response,
      next,
      body.comments[i].author
    )
    body.comments[i].authorName = author.name
    // body.comments[i].author = await User.getUser(
    //   request,
    //   response,
    //   next,
    //   body.comments[i].author
    // )
    // body.comments[i].author = body.comments[i].author.name
  }
  body.author = user
  response.send(body)
})

// GET THE DETAILS OF SPECIFIC COMMENT
router.get('/:_pid/:_cid', (request, response, next) => {
  response.send(request.comment)
})

// ADD NEW POST
router.post('/', mid.requiresLogin, (request, response, next) => {
  let post = request.body
  post.author = mongoose.Types.ObjectId(request.session.userId)
  controllerPost
    .addPost(post)
    .then(async function(data) {
      const user = await User.getCurrentUser(request, response, next)
      user.posts.push(mongoose.Types.ObjectId(data._id))
      user.save(function(err, user) {
        console.log(err)
        if (err) return next(err)
        response.status(201)
        response.json(data)
      })
    })
    .catch(err => {
      console.log(err)
      response.status(err.status || 500).send(err)
    })
})

// ADD COMMENT TO POST
router.post('/:_pid', mid.requiresLogin, (request, response, next) => {
  /*  Comment / Payload / Body Structure
    {author,details,datetime}
  */

  let postParam = request.post
  let comment = new Comment(request.body)
  comment.content = request.body.content
  comment.post = request.post
  comment.author = mongoose.Types.ObjectId(request.session.userId)
  comment.save(function(err, comment) {
    if (err) return next(err)
    postParam.comments.push(comment._id)
    postParam.save(async function(err, post) {
      if (err) return next(err)
      try {
        const user = await User.getCurrentUser(request, response, next)
        user.comments.push(comment._id)
        user.save(function(err, user) {
          if (err) return next(err)
          comment = comment.toObject()
          comment.authorName = user.name
          response.status(201).json(comment)
        })
      } catch (err) {
        return next(err)
      }
    })
  })
})

// DELETE SPECIFIC POST
router.delete('/:_pid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.post.author) {
    let err = new Error('You are not the author of this post/comment.')
    err.status = 401
    return next(err)
  }
  let currentPostId = request.params._pid
  controllerPost
    .deletePost(currentPostId)
    .then(async function(data) {
      const user = await User.getCurrentUser(request, response, next)
      user.posts.pull(request.params._pid)
      user.save(function(err, user) {
        if (err) return next(err)
        response.status(201)
        response.json(data)
      })
    })
    .catch(err => response.status(err.status || 500).send(err))
})

// UPDATE SPECIFIC POST
router.patch('/:_pid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.post.author) {
    let err = new Error('You are not the author of this post.')
    err.status = 401
    return next(err)
  }
  let currentPostId = request.params._pid
  controllerPost
    .updatePost(currentPostId, request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// UPDATE SPECIFIC COMMENT
router.patch('/:_pid/:_cid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.comment.author) {
    let err = new Error('You are not the author of this comment.')
    err.status = 401
    return next(err)
  }
  let commentParam = request.comment
  commentParam.update(request.body, function(err, result) {
    if (err) return next(err)
    response.status(200).json(result)
  })
})

// DELETE SPECIFIC COMMENT
router.delete('/:_pid/:_cid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.comment.author) {
    let err = new Error('You are not the author of this comment.')
    err.status = 401
    return next(err)
  }
  let postParam = request.post
  let commentParam = request.comment
  commentParam.remove(function(err) {
    if (err) return next(err)
    postParam.comments.pull(request.params._cid)
    postParam.save(async function(err, post) {
      if (err) return next(err)
      try {
        const user = await User.getCurrentUser(request, response, next)
        user.comments.pull(request.params._cid)
        user.save(function(err, user) {
          if (err) return next(err)
          response.status(204).json(post)
        })
      } catch (err) {
        return next(err)
      }
    })
  })
})

module.exports = router
