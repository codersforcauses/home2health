const mongoose = require('mongoose')

mongoose.Promise = global.Promise

let dbURI = process.env.db_uri || 'mongodb://localhost:27017/home2health'
if (process.env.NODE_ENV === 'production') dbURI = process.env.MONGO_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection


// Log Mongo connection
db.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`)
})
db.on('error', err => {
  console.log(`Mongoose connection error on ${dbURI}: ${err}`)
})
db.on('disconnected', () => {
  console.log(`Mongoose disconnected ${dbURI}`)
})

// graceful shutdown
const gracefulShutdown = (msg, callback) => {
  console.log(`Mongoose disconnected ${dbURI}: ${msg}`)
  callback()
}

process.on('SIGUSR2', () => {
  gracefulShutdown('Nodemon Shutdown', () => {
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  gracefulShutdown('App Shutdown', () => {
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  gracefulShutdown('Heroku App Shutdown', () => {
    process.exit(0)
  })
})

// require models
require('./models/user')
require('./models/post')
