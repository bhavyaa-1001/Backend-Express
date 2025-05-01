const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    salary: Number,
    department: String,
    hireDate: Date,
    isActive: Boolean,
});
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;