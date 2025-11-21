const express = require("express");
const app = express();
const PORT = 4000;

// Import courses routes
const courseRoutes = require("./routes/courses");

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Use Course Routes
app.use("/courses", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
