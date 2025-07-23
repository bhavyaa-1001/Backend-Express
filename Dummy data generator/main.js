const express = require('express')
const { set } = require('mongoose')
const mongoose = require('mongoose')
const Employee = require('./models/Employee')

mongoose.connect("mongodb://localhost:27017/company");
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  res.render('index', { foo: 'FOO' });
 
})
app.get('/generate', async(req, res) => {

    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: 'John Doe',
            age: Math.floor(Math.random() * 50) + 20,
            position: 'Software Engineer',
            salary: Math.floor(Math.random() * 100000) + 50000,
            department: 'IT',
            hireDate: new Date(),
            isActive: true
        })
        // await e.save()
    }
  res.render('index', { foo: 'FOO' });
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
                                              