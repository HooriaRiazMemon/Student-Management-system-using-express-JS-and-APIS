const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
  Semester: { 
    type: String,
    required: true 
},
    Age: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    dateofBirth: {
        type: Date,
        required: true,

    },
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;