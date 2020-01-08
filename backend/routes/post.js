var express = require('express')
var router = express.Router()
const controllerPost = require('../controller/post')
const Post = require('../models/post')
const Comment = require('../models/comment')
const User = require('../models/user')
var mid = require('../middleware')
var mongoose = require('mongoose')
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
    .getPagePost(page, numberOfPost)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// GET THE DETAILS OF SPECIFIC POST
router.get('/:_pid', (request, response, next) => {
  response.send(request.post)
})

// GET THE DETAILS OF SPECIFIC COMMENT
router.get('/:_pid/:_cid', (request, response, next) => {
  response.send(request.comment)
})

// ADD NEW POST
router.post('/', mid.requiresLogin, (request, response, next) => {
  request.body.author = mongoose.Types.ObjectId(request.session.userId)
  controllerPost
    .addPost(request.body)
    .then(data => {
      User.findById(request.session.userId, function(err, doc) {
        if (err) return next(err)
        if (!doc) {
          err = new Error('User Not Found')
          err.status = 404
          return next(err)
        }
        doc.posts.push(mongoose.Types.ObjectId(data._id))
        doc.save(function(err, user) {
          if (err) return next(err)
          response.status(201)
          response.json(data)
        })
      })
    })
    .catch(err => response.status(400).send(err))
})

// ADD COMMENT TO POST
router.post('/:_pid', mid.requiresLogin, (request, response, next) => {
  /*  Comment / Payload / Body Structure
    {author,details,datetime}
  */

  var postParam = request.post
  var comment = new Comment(request.body)
  comment.post = request.post
  comment.author = mongoose.Types.ObjectId(request.session.userId)
  comment.save(function(err, comment) {
    if (err) return next(err)
    postParam.comments.push(comment._id)
    postParam.save(function(err, post) {
      if (err) return next(err)
      User.findById(request.session.userId, function(err, doc) {
        if (err) return next(err)
        if (!doc) {
          err = new Error('User Not Found')
          err.status = 404
          return next(err)
        }
        doc.comments.push(comment._id)
        doc.save(function(err, user) {
          if (err) return next(err)
          response.status(201).json(post)
        })
      })
    })
  })
})

// DELETE SPECIFIC POST
router.delete('/:_pid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.post.author) {
    var err = new Error('You are not the author of this post/comment.')
    err.status = 401
    return next(err)
  }
  let currentPostId = request.params._pid
  controllerPost
    .deletePost(currentPostId)
    .then(data => {
      User.findById(request.session.userId, function(err, doc) {
        if (err) return next(err)
        if (!doc) {
          err = new Error('User Not Found')
          err.status = 404
          return next(err)
        }
        doc.posts.pull(request.params._pid)
        doc.save(function(err, user) {
          if (err) return next(err)
          response.status(201)
          response.json(data)
        })
      })
    })
    .catch(err => response.status(400).send(err))
})

// UPDATE SPECIFIC POST
router.patch('/:_pid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.post.author) {
    var err = new Error('You are not the author of this post/comment.')
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
  if (request.session.userId != request.post.author) {
    var err = new Error('You are not the author of this post/comment.')
    err.status = 401
    return next(err)
  }
  var commentParam = request.comment
  commentParam.update(request.body, function(err, result) {
    if (err) return next(err)
    response.json(result)
  })
})

// DELETE SPECIFIC COMMENT
router.delete('/:_pid/:_cid', mid.requiresLogin, (request, response, next) => {
  if (request.session.userId != request.post.author) {
    var err = new Error('You are not the author of this post/comment.')
    err.status = 401
    return next(err)
  }
  var postParam = request.post
  var commentParam = request.comment
  commentParam.remove(function(err) {
    if (err) return next(err)
    postParam.comments.pull(request.params._cid)
    postParam.save(function(err, post) {
      if (err) return next(err)
      User.findById(request.session.userId, function(err, doc) {
        if (err) return next(err)
        if (!doc) {
          err = new Error('User Not Found')
          err.status = 404
          return next(err)
        }
        doc.comments.pull(request.params._cid)
        doc.save(function(err, user) {
          if (err) return next(err)
          response.status(201).json(post)
        })
      })
    })
  })
})

module.exports = router
