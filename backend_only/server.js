const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db/mongo');
const authRoutes = require('./routes/auth'); // Import auth routes
require('dotenv').config();
const cookieParser = require('cookie-parser');


const app = express();
const PORT = 3000; 

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Allow only your frontend origin
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json()); 
app.use(cookieParser());
// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Use authentication routes

// Test Route
app.get('/', (req, res) => {
    res.send("Backend is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
