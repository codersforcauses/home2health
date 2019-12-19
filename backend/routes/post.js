var express = require('express')
var router = express.Router()
const Post = require('../models/post')
const controller = require('../controller/post')
console.log(controller)
/*
  Post.js is used to find the specific post to display in post page (GET)
  
  It is also used to create new posts (POST)
*/

// GET posts for specific pages
router.get('/:page', (request, response, next) => {
  const page = request.params.page
  controller
    .getPagePost(page)
    .then(data => {
      response.send(data)
    })
    .catch(err => console.log(err))
})

// GET THE DETAILS OF SPECIFIC PAGES
router.post('/:_id', (request, response, next) => {
  let currentPostId = request.params._id
  controller.getPost(currentPostId).then(data => {
    response.send(data)
  })
})

// ADD NEW POST
router.put('/', (request, response, next) => {
  console.log(request.body)
  controller
    .addPost(request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => console.log(err))
})

// DELETE SPECIFIC POST
router.delete('/:_id', (request, response, next) => {
  let currentPostId = request.params._id
  controller
    .deletePost(currentPostId)
    .then(data => {
      response.send(data)
    })
    .catch(err => console.log(err))
})

// UPDATE SPECIFIC POST
router.patch('/:_id', (request, response, next) => {
  let currentPostId = request.params._id
  controller
    .updatePost(currentPostId, request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => console.log(err))
})

module.exports = router
