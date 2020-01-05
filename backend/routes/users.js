var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mid = require('../middleware');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
	User.findById(req.session.userId)
	  .exec(function (error, user) {
		if (error) {
		  return next(error);
		}
		else {
		  return res.json(user);
		}
	  })
  });
// GET /logout
router.get('/logout', mid.requiresLogin, function(req, res, next) {
	if (req.session) {
	  // delete session object
	  req.session.destroy(function(err) {
		if (err) {
		  return next(err);
		}
		else {
			// What goes here?
		  	return res.redirect('/');
		}
	  })
	}
  })
// POST /login
router.post('/login', mid.loggedOut, function(req, res, next) {
	if (req.body.email && req.body.password) {
	  User.authenticate(req.body.email, req.body.password, function(error, user) {
		if (error || !user) {
		  var err = new Error('Wrong email or password.');
		  err.status = 401;
		  return next(err);
		}
		else {
		  req.session.userId = user._id;
		  return res.redirect('/users/profile');
		}
	  });
	}
	else {
	  var err = new Error('Email and password are required.');
	  err.status = 401;
	  return next(err);
	}
  })
// POST /register
router.post('/register', mid.loggedOut, function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.password) {
		var userData = {
			email: req.body.email,
			name: req.body.name,
			password: req.body.password
		}
		// use schema's `create` method to insert document into Mongo
		User.create(userData, function(error, user) {
			if (error) {
				return next(error);
			}
			else {
				req.session.userId = user._id;
				return res.redirect('/users/profile');
			}
		})
  }
  else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;
