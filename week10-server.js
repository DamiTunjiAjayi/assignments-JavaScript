const http = require('http');

// Define the port to listen on
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write the response body
  res.end('Welcome to My Server!');
});

// Start listening
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
