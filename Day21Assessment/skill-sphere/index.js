const express = require("express");
const app = express();
const PORT = 4000;

const userRoutes = require("./routes/users");
const courseRoutes = require("./routes/courses");

// -----------------------------
// Challenge 1: Global Logging Middleware
// -----------------------------
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} at ${new Date().toISOString()}`);
  next();
});

// -----------------------------
// Challenge 2: Built-in Body Parsing
// -----------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// Challenge 3: Enable EJS Template Engine
// -----------------------------
app.set("view engine", "ejs");
app.set("views", "views");

// -----------------------------
// Root Route
// -----------------------------
app.get("/", (req, res) => {
  res.send("SkillSphere LMS - Middleware & Templates Working!");
});

// -----------------------------
// Routes
// -----------------------------
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

// -----------------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
