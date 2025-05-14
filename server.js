const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});