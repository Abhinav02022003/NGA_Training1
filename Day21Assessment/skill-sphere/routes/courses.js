const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const courses = [
    { id: 101, name: "React Mastery", duration: "6 weeks" },
    { id: 102, name: "Node.js Bootcamp", duration: "4 weeks" },
    { id: 103, name: "Python Pro", duration: "8 weeks" },
  ];

  res.render("courses", { courses });
});

module.exports = router;
