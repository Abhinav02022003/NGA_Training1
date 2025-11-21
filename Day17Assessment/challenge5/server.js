const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Hello from Node.js Server");
  } else if (req.url === "/about") {
    res.end("Welcome to the About Page!");
  } else {
    res.statusCode = 404;
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
