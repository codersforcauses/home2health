var secured = require('../middleware/secured')

var express = require('express')
var router = express.Router()

/* GET users listing. */
/* uses the secured middle ware to secure the route */
router.get('/', secured(), function(req, res, next) {
  const { _raw, _json, ...userProfile } = req.user
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  })
  res.send('respond with a resource')
})

module.exports = router
