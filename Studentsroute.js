const express = require('express');
const router = express.Router();

// 1. Import the Student Model
// The path assumes the Student.js model file is in a folder named 'models' 
// one directory up from the 'routes' folder.
const Student = require('../Models/Student');

// --- 1. CREATE a new Student (POST /Student) ---
router.post('/Student', async (req, res) => {
    try {
        // Creates a new Student instance using data from the request body (req.body)
        const student = new Student({
            name: req.body.name,
            Semester: req.body.Semester,
            Age: req.body.Age,
            Address: req.body.Address,
            dateofBirth: req.body.dateofBirth,
            // Add any other fields from your Student Schema here
        });

        // Save the new document to the 'students' collection in MongoDB
        const savedStudent = await student.save();
        res.status(201).json(savedStudent); // 201 Created

    } catch (error) {
        // Handles validation errors (e.g., missing required fields)
        res.status(400).json({ 
            message: error.message
        });
    }
});

// --- 2. RETRIEVE all Students (GET /Student) ---
router.get('/Student', async (req, res) => {
    try {
        // Find all documents in the 'students' collection
        const students = await Student.find();
        res.json(students);
        
    } catch (error) {
        // Handles database errors
        res.status(500).json({ 
            message: error.message
        });
    }
});

// --- 3. UPDATE a Student by ID (PUT /Student/:id) ---
router.put('/Student/:id', async (req, res) => {
    try {
        // Find by ID and update the document with data from req.body
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, // ID from the URL parameter
            req.body,      // Data to update
            { 
                new: true,        // Returns the updated document instead of the original
                runValidators: true // Ensures Mongoose schema validation is applied to the update
            }
        );
        
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(updatedStudent);

    } catch (error) {
        res.status(400).json({ 
            message: error.message
        });
    }
});

// --- 4. DELETE a Student by ID (DELETE /Student/:id) ---
router.delete('/Student/:id', async (req, res) => {
    try {
        // Find by ID and remove the document
        const removedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!removedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        
        res.json({ message: 'Student successfully deleted', removedStudent });

    } catch (error) {
        res.status(500).json({ 
            message: error.message
        });
    }
});

module.exports = router;