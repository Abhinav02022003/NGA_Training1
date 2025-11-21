const express = require('express');
const app = express();
const port = 3000;
const logger = require('./middleware/logger');
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Global logging middleware
app.use(logger);

// Modular routing
app.use('/students', require('./routes/students'));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
