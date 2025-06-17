// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// --- 1. Request-Logging Middleware ---
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// --- 2. Routes ---
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

app.get('/search', (req, res) => {
  const q = req.query.q;
  if (q) {
    res.send(`Search query is "${q}"`);
  } else {
    res.send('Please provide a search query using ?q=your+term');
  }
});

// Example route that triggers an error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err);
});


// 3.Sample data: list of books
const books = [
  { id: 1, title: "Things Fall Apart", author: "Chinua Achebe" },
  { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie" },
  { id: 3, title: "The Lion and the Jewel", author: "Wole Soyinka" }
];

// New route to return books as JSON
app.get('/books', (req, res) => {
  res.json(books);
});


// --- 4. 404 Handler ---
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// --- 5. Error-Handling Middleware ---
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    status: 'error',
    message: 'Oops! An unexpected error occurred.',
    details: err.message
  });
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Express server listening at http://localhost:${PORT}/`);
});
