const db = require('../database/db');
const { v4: uuidv4 } = require('uuid');

class ReviewRequest {
  constructor(id, requestLink, requestStatus, numberOfStars, reviewText, userId, clientId, language) {
    this.id = id;
    this.requestLink = requestLink;
    this.requestStatus = requestStatus;
    this.numberOfStars = numberOfStars;
    this.reviewText = reviewText;
    this.userId = userId;
    this.clientId = clientId;
    this.language = language;
  }

  static create(requestLink, requestStatus, numberOfStars, reviewText, userId, clientId, language) {
    return new Promise((resolve, reject) => {
      const id = uuidv4();
      const sql = 'INSERT INTO review_requests (id, request_link, request_status, number_of_stars, review_text, user_id, client_id, language) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';    
      db.run(sql, [id, requestLink, requestStatus, numberOfStars, reviewText, userId, clientId, language], function(err) {
        if (err) {
          reject(err);
        } else {
          // Get the ID of the newly inserted row
          db.get('SELECT last_insert_rowid() as id', (err, row) => {
            if (err) {
              reject(err);
            } else {
              console.log(id);
              resolve(new ReviewRequest(id, requestLink, requestStatus, numberOfStars, reviewText, userId, clientId, language));
            }
          });
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
          resolve(new ReviewRequest(row.id, row.request_link, row.request_status, row.number_of_stars, row.review_text, row.user_id, row.client_id, row.language));
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
          const reviewRequests = rows.map(row => new ReviewRequest(row.id, row.request_link, row.request_status, row.number_of_stars, row.review_text, row.user_id, row.client_id, row.language));
          resolve(reviewRequests);
        }
      });
    });
  }
}

module.exports = ReviewRequest;
