const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "My Blog"
    let searchText = "SearchNow"
  res.render("index", { siteName: siteName , searchText: searchText })   
})

app.get('/', (req, res) => {
    let blogTitle = "My Bblog"
    let blogContent = "Seaarch"
  res.render("index", { blogTitle: blogTitle , blogContent: blogContent })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
