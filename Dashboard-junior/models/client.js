const db = require('../database/db');

class Client {
  constructor(id, name, last_name, phone, user_id, created_at, updated_at) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.phone = phone;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static create(name, last_name, phone, user_id) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO clients (name, last_name, phone, user_id) VALUES (?, ?, ?, ?)';
      db.run(sql, [name, last_name, phone, user_id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(new Client(this.lastID, name, last_name, phone, user_id, new Date(), new Date()));
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
          resolve(new Client(row.id, row.name, row.last_name, row.phone, row.status, row.user_id, row.created_at, row.updated_at));
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
          const clients = rows.map(row => new Client(row.id, row.name, row.last_name, row.phone, row.status, row.user_id, row.created_at, row.updated_at));
          resolve(clients);
        }
      });
    });
  }
  static findAll(user_id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clients WHERE user_id = ?';
      db.all(sql, [user_id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const clients = rows.map(row => new Client(row.id, row.name, row.last_name, row.phone, row.status, row.user_id, row.created_at, row.updated_at));
          resolve(clients);
        }
      });
    });
  }

  static update(id, name, last_name, phone) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE clients SET name = ?, last_name = ?, phone = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
      db.run(sql, [name, last_name, phone, id], function(err) {
        if (err) {
          reject(err);
        } else {
          // Create a new Client object with updated values
          const updatedClient = new Client(id, name, last_name, phone, null, null, new Date());
          resolve(updatedClient);
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
