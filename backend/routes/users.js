var express = require('express')
var router = express.Router()
var User = require('../models/user')
var mid = require('../middleware')
const auth = require('basic-auth')
const { check, validationResult } = require('express-validator/check')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

// GET /logout
router.get('/logout', mid.requiresLogin, function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err)
      } else {
        // What goes here?
        return res.redirect('/')
      }
    })
  }
})
// POST /login
router.post('/login', mid.loggedOut, function(req, res, next) {
  const credentials = auth(req)
  console.log(credentials)

  if (credentials) {
    User.authenticate(credentials.name, credentials.pass, function(
      error,
      user
    ) {
      if (error || !user) {
        var err = new Error('Wrong email or password.')
        err.status = 401
        return next(err)
      } else {
        req.session.userId = user._id
        return res.json(user)
      }
    })
  } else {
    var err = new Error('Email and password are required.')
    err.status = 401
    return next(err)
  }
})
// POST /register
router.post(
  '/register',
  [
    check('name')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "name"'),
    check('email')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "email"'),
    check('password')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "password"')
  ],
  mid.loggedOut,
  function(req, res, next) {
    const errors = validationResult(req)

    // If there are validation errors...
    if (!errors.isEmpty()) {
      // Use the Array `map()` method to get a list of error messages.
      const errorMessages = errors.array().map(error => error.msg)

      // Return the validation errors to the client.
      return res.status(400).json({ errors: errorMessages })
    }
    var userData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    }
    // use schema's `create` method to insert document into Mongo
    User.create(userData, function(error, user) {
      if (error) {
        return next(error)
      } else {
        req.session.userId = user._id
        return res.json(user)
      }
    })
  }
)
// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId).exec(function(error, user) {
    if (error) {
      error.message = req.session.userId
      return next(error)
    } else {
      return res.json(user)
    }
  })
})
module.exports = router
