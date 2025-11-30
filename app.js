// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// ⚠️ IMPORTANT: Replace <db_password> with your actual password
// Note: Hooria7868. is likely part of the password, but the dot might cause issues 
// if it's not URL-encoded. Be sure to use the correct password.
const ATLAS_URI = 'mongodb+srv://HooriaRiaz:Hooria7868.@scdlab.fclbh9y.mongodb.net/Students?appName=SCDLAB';

// Create an Express application
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(ATLAS_URI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// --- CORRECTED ROUTE DEFINITION START ---

// Define routes
// 1. Use the correct relative path and forward slashes (./routes/Studentsroute)
// 2. Use a descriptive variable name (studentsRoute)
const studentsRoute = require('./Routes/Studentsroute');

// 3. Use the defined variable name (studentsRoute) to mount the middleware
app.use('/api', studentsRoute);

// --- CORRECTED ROUTE DEFINITION END ---


// Handle 404 errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});