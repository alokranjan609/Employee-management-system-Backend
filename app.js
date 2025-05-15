// app.js
const express = require('express');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('Employee Management System API is running.');
});

module.exports = app;
