const db = require('../database/db');

class Client {
  constructor(id, name, last_name, phone, user_id) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.phone = phone;
    this.user_id = user_id;
  }

  static create(name, last_name, phone, user_id) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO clients (name, last_name, phone, user_id) VALUES (?, ?, ?, ?)';
      db.run(sql, [name, last_name, phone, user_id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(new Client(this.lastID, name, last_name, phone, user_id));
        }
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clients WHERE id = ?';
      db.get(sql, [id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(new Client(row.id, row.name, row.last_name, row.phone, row.user_id));
        } else {
          resolve(null);
        }
      });
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clients';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const clients = rows.map(row => new Client(row.id, row.name, row.last_name, row.phone, row.user_id));
          resolve(clients);
        }
      });
    });
  }

  static findAllByUserId(user_id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clients WHERE user_id = ?';
      db.all(sql, [user_id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const clients = rows.map(row => new Client(row.id, row.name, row.last_name, row.phone, row.user_id));
          resolve(clients);
        }
      });
    });
  }

  static update(id, name, last_name, phone) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE clients SET name = ?, last_name = ?, phone = ? WHERE id = ?';
      db.run(sql, [name, last_name, phone, id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(new Client(id, name, last_name, phone, null));
        }
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM clients WHERE id = ?';
      db.run(sql, [id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Client;
