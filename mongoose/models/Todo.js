import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    color: String,
    weight: Number,
    height: Number,
    length: Number,
    width: Number,
    description: String,
    isDone : Boolean,
    });

export const Todo = mongoose.model('Todo', TodoSchema);

