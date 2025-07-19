const express = require('express')
const app = express()
const port = 3000

const blog = require('./routes/blog')

app.use('/blog', blog)


app.use(express.static('public')) // Serve static files from the public directory

const myLogger = function (req, res, next) {
    console.log('m1iddleware 1 LOGGED')
    next()
  }
  
  app.use(myLogger)

  const myLogger1 = function (req, res, next) {
    console.log('middleware 2 LOGGED')
    next()
  }
  
  app.use(myLogger1)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  