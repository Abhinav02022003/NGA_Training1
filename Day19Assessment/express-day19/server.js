const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Import router
const bookRouter = require("./routes/books");

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Express Router Challenge 5");
});

// Mount books router
app.use("/books", bookRouter);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error("Internal Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});