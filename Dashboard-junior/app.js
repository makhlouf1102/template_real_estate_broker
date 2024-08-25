const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const indexRoute = require('./routes/index');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Use EJS Layouts
app.use(expressLayouts);

// Set the default layout
app.set('layout', 'layout');

app.use('/', indexRoute);
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);

app.use((req, res, next) => {
  res.status(404).render('not-found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});