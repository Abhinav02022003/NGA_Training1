const express = require('express');
const router = express.Router();

let students = [];
let currentId = 1;

// Create - POST
router.post('/', (req, res) => {
  const student = { id: currentId++, ...req.body };
  students.push(student);
  res.status(201).json(student);
});

// Get all - GET
router.get('/', (req, res) => {
  res.json(students);
});

// Get by ID - GET
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

// Update - PUT
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });

  Object.assign(student, req.body);
  res.json(student);
});

// Delete - DELETE
router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Student not found' });

  students.splice(index, 1);
  res.json({ message: 'Student deleted successfully' });
});

module.exports = router;
