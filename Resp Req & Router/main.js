const express = require('express')
const app = express()
const port = 3000
const blogRouter = require('./routes/blog')

app.use(express.static('public'))
app.use('/blog', blogRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/index', (req, res) => {
  res.sendFile('templates/index.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
