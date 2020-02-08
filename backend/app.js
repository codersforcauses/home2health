const cors = require('cors')
const path = require('path')
const logger = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const sendMail = require('./mail')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const port = process.env.PORT | 5000



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
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
)
// use sessions for tracking logins
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
)
// make user ID available in templates
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.userId
  next()
})
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
// listen on port
app.listen(port, function() {
  console.log('Express app listening on port ' + port)
})

// app.listen(process.env.PORT || 5001, function() {
//   console.log('Express app listening on port 5001')
// })

module.exports = app
