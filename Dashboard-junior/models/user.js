const db = require('../database/db');

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static create(username, password) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.run(sql, [username, password], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(new User(this.lastID, username, password));
        }
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE id = ?';
      db.get(sql, [id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(new User(row.id, row.username, row.password));
        } else {
          resolve(null);
        }
      });
    });
  }

  static findByUsername(username) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE username = ?';
      db.get(sql, [username], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(new User(row.id, row.username, row.password));
        } else {
          resolve(null);
        }
      });
    });
  }

  updatePassword(newPassword) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE users SET password = ? WHERE id = ?';
      db.run(sql, [newPassword, this.id], (err) => {
        if (err) {
          reject(err);
        } else {
          this.password = newPassword;
          resolve(this);
        }
      });
    });
  }
}

module.exports = User;

