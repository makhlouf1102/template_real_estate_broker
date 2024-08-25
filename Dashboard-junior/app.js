const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const loginRoute = require('./routes/login');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Use EJS Layouts
app.use(expressLayouts);

// Set the default layout
app.set('layout', 'layout');

app.use('/login', loginRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});