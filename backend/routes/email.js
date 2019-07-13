const express = require('express')
const router = express.Router()

/* GET users listing. */
router.post('/', (req, res) => {
  const { name, organisation, email, message } = req.body
  sendMail(name, organisation, email, message, function(err, data) {
    if (err) {
      res.json({
        message: err,
        sent: false
      })
    } else {
      res.json({
        sent: true
      })
    }
  })
})
module.exports = router
