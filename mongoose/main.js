import mongoose from "mongoose";
import  express  from "express";
import { Todo } from "./models/Todo.js";
let a = mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({
    name: 'Dog',
    age: 5,
    breed: 'Labrador',
    color: 'Black',
    weight: 30,
    height: 60,
    length: 80,
    width: 40,
    description: 'A friendly dog',
    isDone: false
  });
  todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
