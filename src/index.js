
const checkSite = require('./libs/checkSite')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
const port = 3000

app.post('/check', (req, res) => {
  checkSite(req.body.type, req.body.url, req.body.data)
    .then(result => {
      res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
