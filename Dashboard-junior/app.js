const express = require('express');
const loginRoute = require('./routes/login');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/login', loginRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
