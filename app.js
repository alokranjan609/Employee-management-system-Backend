// app.js
const express = require('express');
const cors = require('cors');


const app = express();



// Routes


// Health Check
app.get('/', (req, res) => {
  res.send('Employee Management System API is running.');
});

module.exports = app;
