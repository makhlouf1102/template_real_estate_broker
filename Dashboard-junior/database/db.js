const sqlite3 = require('sqlite3').verbose();

// Open a database connection
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Database connected');
  }
});

module.exports = db;

