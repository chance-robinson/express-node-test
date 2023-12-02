const express = require('express');
const app = express();
const port = 3000;

const taskRoutes = require('./src/routes/tasks');

app.use('/tasks', taskRoutes);

// Basic error handling middleware for invalid requests
app.use((req, res, next) => {
  res.status(400).json({ error: 'Invalid request' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});