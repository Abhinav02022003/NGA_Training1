const express = require("express");
const router = express.Router();

// --------------------
// Middleware to validate course ID
// --------------------
function validateCourseId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.json({ error: "Invalid course ID" });
  }

  next(); // Proceed to main route
}

// --------------------
// Dynamic Route
// --------------------
router.get("/:id", validateCourseId, (req, res) => {
  const { id } = req.params;

  res.json({
    id: id,
    name: "React Mastery",
    duration: "6 weeks"
  });
});

module.exports = router;
