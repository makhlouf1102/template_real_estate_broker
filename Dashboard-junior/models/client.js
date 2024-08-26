const db = require('../database/db');

class Client {
  constructor(id, name, email, phone, address, city, status, user_id) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = 'Montreal';
    this.status = Status.ACTIVE;
    this.user_id = user_id;
  }

  static create(name, email, phone, address, city, status, user_id) {
    if (!city) {
      city = 'Montreal';
    }
    if (!status) {
      status = Status.ACTIVE;
    }
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO clients (name, email, phone, address, city, status, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.run(sql, [name, email, phone, address, city, status, user_id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(new Client(this.lastID, name, email, phone, address, city, status, user_id, new Date()));
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
          resolve(new Client(row.id, row.name, row.email, row.phone, row.address, row.city, row.status, row.user_id, row.created_at));
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
          const clients = rows.map(row => new Client(row.id, row.name, row.email, row.phone, row.address, row.city, row.status, row.user_id, row.created_at));
          resolve(clients);
        }
      });
    });
  }

  static update(id, name, email, phone, address, city, status) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE clients SET name = ?, email = ?, phone = ?, address = ?, city = ?, status = ? WHERE id = ?';
      db.run(sql, [name, email, phone, address, city, status, id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this);
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

// status enum
class Status {
  static ACTIVE = 'active';
  static INACTIVE = 'inactive';
  static ASK_FOR_REVIEW = 'ask_for_review';
}

module.exports = Client;
