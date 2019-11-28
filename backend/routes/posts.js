var express = require('express')
var router = express.Router()

/*
  Posts.js is used to handle pagination of posts page
  -> Display list of posts in a specific orderly way
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
