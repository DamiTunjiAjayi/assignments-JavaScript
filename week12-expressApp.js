// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route with URL parameter for user ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

// Route with query parameter for search
app.get('/search', (req, res) => {
  const query = req.query.q;
  if (query) {
    res.send(`Search query is "${query}"`);
  } else {
    res.send('Please provide a search query using ?q=your+term');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server listening at http://localhost:${PORT}/`);
});
