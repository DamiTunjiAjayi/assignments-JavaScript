const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // normalize URL (remove query string, trailing slash)
  const url = req.url.replace(/\/+$/,'') || '/';

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  switch (url) {
    case '/':
      res.end('Welcome to My Server!'); 
      break;
    case '/about':
      res.end('About Us: This is a basic Node.js HTTP server.'); 
      break;
    case '/contact':
      res.end('Contact Us at: contact@example.com'); 
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
