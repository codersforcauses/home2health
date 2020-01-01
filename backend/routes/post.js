var express = require('express')
var router = express.Router()
const controllerPost = require('../controller/post')
/*
  Post.js is used to find the specific post to display in post page (GET)
  
  It is also used to create new posts (POST)
*/

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
router.get('/:_id', (request, response, next) => {
  let currentPostId = request.params._id;
  controllerPost
    .getSpecificPost(currentPostId)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// ADD NEW POST
router.put('/', (request, response, next) => {
  console.log(request.body)
  controllerPost
    .addPost(request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// ADD COMMENT TO POST
router.post('/:_id', (request, response, next) => {
  /*  Comment / Payload / Body Structure
    {author,details,datetime}
  */
  let currentPostId = request.params._id
  controllerPost
    .addComment(currentPostId, request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// DELETE SPECIFIC POST
router.delete('/:_id', (request, response, next) => {
  let currentPostId = request.params._id
  controllerPost
    .deletePost(currentPostId)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

// UPDATE SPECIFIC POST
router.patch('/:_id', (request, response, next) => {
  let currentPostId = request.params._id
  controllerPost
    .updatePost(currentPostId, request.body)
    .then(data => {
      response.send(data)
    })
    .catch(err => response.status(400).send(err))
})

module.exports = router
