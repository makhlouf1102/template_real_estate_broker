const db = require('../database/db');

class ReviewRequest {
  constructor(id, requestStatus, numberOfStars, reviewText, userId, clientId) {
    this.id = id;
    this.requestStatus = requestStatus;
    this.numberOfStars = numberOfStars;
    this.reviewText = reviewText;
    this.userId = userId;
    this.clientId = clientId;
  }

  static create(requestStatus, numberOfStars, reviewText, userId, clientId) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO review_requests (request_status, number_of_stars, review_text, user_id, client_id) VALUES (?, ?, ?, ?, ?)';
      db.run(sql, [requestStatus, numberOfStars, reviewText, userId, clientId], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(new ReviewRequest(this.lastID, requestStatus, numberOfStars, reviewText, userId, clientId));
        }
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM review_requests WHERE id = ?';
      db.get(sql, [id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(new ReviewRequest(row.id, row.request_status, row.number_of_stars, row.review_text, row.user_id, row.client_id));
        } else {
          resolve(null);
        }
      });
    });
  }

  update() {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE review_requests SET request_status = ?, number_of_stars = ?, review_text = ? WHERE id = ?';
      db.run(sql, [this.requestStatus, this.numberOfStars, this.reviewText, this.id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      });
    });
  }

  static findByUserId(userId) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM review_requests WHERE user_id = ?';
      db.all(sql, [userId], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const reviewRequests = rows.map(row => new ReviewRequest(row.id, row.request_status, row.number_of_stars, row.review_text, row.user_id, row.client_id));
          resolve(reviewRequests);
        }
      });
    });
  }
}

module.exports = ReviewRequest;
