var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// POST /register
router.post('/register', function(req, res, next) {
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
				return res.redirect('/profile');
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
