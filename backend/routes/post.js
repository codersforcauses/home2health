var express = require('express')
var router = express.Router()

/*
  Post.js is used to find the specific post to display in post page (GET)
  
  It is also used to create new posts (POST)
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
