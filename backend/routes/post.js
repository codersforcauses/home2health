var express = require('express')
var router = express.Router()
const controllerPost = require('../controller/post')
const Post = require('../models/post')
const Comment = require('../models/comment')
/*
  Post.js is used to find the specific post to display in post page (GET)
  
  It is also used to create new posts (POST)
*/

router.param("_pid", function(req, res, next, id) {
  Post.findById(id, function(err, doc) {
      if (err) return next(err);
      if (!doc) {
          err = new Error("Post Not Found");
          err.status = 404;
          return next(err);
      }
      req.post = doc;
      return next();
  });
});
router.param("_cid", function(req, res, next, id) {
  Comment.findById(id, function(err, doc) {
      if (err) return next(err);
      if (!doc) {
          err = new Error("Comment Not Found");
          err.status = 404;
          return next(err);
      }
      req.comment = doc;
      return next();
  });
});

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
  let currentPostId = request.params._pid;
  controllerPost
    .getSpecificPost(currentPostId)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// ADD NEW POST
router.post('/', (request, response, next) => {
  console.log(request.body)
  controllerPost
    .addPost(request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// ADD COMMENT TO POST
router.post('/:_pid', (request, response, next) => {
  /*  Comment / Payload / Body Structure
    {author,details,datetime}
  */
  var comment = new Comment(request.body);
  comment.post = request.post;
  comment.save(function(err, comment) {
    if (err) return next(err);;
    request.post.comments.push(comment);
    request.post.save(function(err, post) {
      if (err) return next(err);
      response.status(201);
      response.json(post);
    });
    
  });
})

// DELETE SPECIFIC POST
router.delete('/:_pid', (request, response, next) => {
  let currentPostId = request.params._pid
  controllerPost
    .deletePost(currentPostId)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// UPDATE SPECIFIC POST
router.patch('/:_pid', (request, response, next) => {
  let currentPostId = request.params._pid
  controllerPost
    .updatePost(currentPostId, request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// UPDATE SPECIFIC COMMENT
router.patch('/:_pid/:_cid', (request, response, next) => {
  request.comment.update(request.body, function(err, result) {
    if (err) return next(err);
    response.json(result);
  });
});

// DELETE SPECIFIC COMMENT
router.delete('/:_pid/:_cid', (request, response, next) => {
  request.comment.remove(function(err) {
    if (err) return next(err);
    request.post.comments.pull(request.params._cid);
    request.post.save(function(err, post) {
      if (err) return next(err);
      response.status(201);
      response.json(post);
    });
  });
});

module.exports = router

