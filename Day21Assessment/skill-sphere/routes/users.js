const express = require("express");
const router = express.Router();

// GET /users
router.get("/", (req, res) => {
  res.json({
    message: "GET /users working!",
  });
});

// POST /users
router.post("/", (req, res) => {
  const userData = req.body;
  res.json({
    message: "User created successfully",
    data: userData,
  });
});

module.exports = router;
