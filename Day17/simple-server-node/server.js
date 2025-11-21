// Step 1: Create http constant
const http = require('http');

// Step 2: Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response message
  res.end('Hello, this is my Node.js server!');
});

// Step 3: Start the server on port 3000
server.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});
