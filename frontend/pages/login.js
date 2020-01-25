require('dotenv').config()

var request = require('request')

var options = {
  method: 'POST',
  url: 'https://cfchome2health.au.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: {
    grant_type: 'client credentials',
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: process.env.APIIdentifier
  }
}

request(options, function(error, response, body) {
  if (error) throw new Error(error)

  console.log(body)
})
