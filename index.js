const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const person = require('./routes/person')
const port = 3000

app.use(bodyParser.json())

app.use('/', person)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
