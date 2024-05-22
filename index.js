const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Server-side Rendering with Express and EJS' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
