const cors = require('cors')
const path = require('path')
const logger = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const sendMail = require('./mail')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000

require('dotenv').config()
require('./db')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const emailRouter = require('./routes/email')
const postRouter = require('./routes/post')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/email', emailRouter)
app.use('/post', postRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app

// auth0 configuration

var session = require('express-session')

// config express-session
var sess = {
  secret: 'pY1Mv4ERgy8MF5Fp5727yJwIchMydEwpPkJiAwyWVXG88bHMyzszYXKSAgde1gXK',
  cookie: {},
  resave: false,
  saveUninitialized: true
}

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true

  // Uncomment the line below if your application is behind a proxy (like on Heroku)
  // or if you're encountering the error message:
  // "Unable to verify authorization request state"
  // app.set('trust proxy', 1);
}

app.use(session(sess))

// auth0 passport configuration (authentication middleware)

// Load environment variables from .env
var dotenv = require('dotenv')
dotenv.config()

// Load Passport
var passport = require('passport')
var Auth0Strategy = require('passport-auth0')

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile)
  }
)

passport.use(strategy)

app.use(passport.initialize())
app.use(passport.session())

// var userInViews = require('./lib/middleware/userInViews');
// var authRouter = require('./routes/auth');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

app.use(userInViews())
app.use('/', authRouter)
app.use('/', indexRouter)
app.use('/', usersRouter)
