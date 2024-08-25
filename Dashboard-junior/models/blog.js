const db = require('../database/db');

class Blog {
    constructor(id, title, content, authorId, createdAt, updatedAt, isPublished) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isPublished = isPublished;
    }

    static async getAll() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM blog_posts', [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows.map(row => new Blog(row.id, row.title, row.content, row.author_id, row.created_at, row.updated_at, row.is_published)));
                }
            });
        });
    }

    static async getAllByUser(authorId) {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM blog_posts WHERE author_id = ?', [authorId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows.map(row => new Blog(row.id, row.title, row.content, row.author_id, row.created_at, row.updated_at, row.is_published)));
                }
            });
        });
    }

    static async getById(id) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM blog_posts WHERE id = ?', [id], (err, row) => {
                if (err) {
                    reject(err);
                } else if (row) {
                    resolve(new Blog(row.id, row.title, row.content, row.author_id, row.created_at, row.updated_at, row.is_published));
                } else {
                    resolve(null);
                }
            });
        });
    }

    async save() {
        if (this.id) {
            return this.update();
        } else {
            return this.create();
        }
    }

    async create() {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO blog_posts (title, content, author_id, is_published) VALUES (?, ?, ?, ?)';
            db.run(sql, [this.title, this.content, this.authorId, this.isPublished], function(err) {
                if (err) {
                    reject(err);
                } else {
                    this.id = this.lastID;
                    resolve(this);
                }
            });
        });
    }

    async update() {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE blog_posts SET title = ?, content = ?, author_id = ?, updated_at = CURRENT_TIMESTAMP, is_published = ? WHERE id = ?';
            db.run(sql, [this.title, this.content, this.authorId, this.isPublished, this.id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this);
                }
            });
        });
    }

    static async delete(id) {
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM blog_posts WHERE id = ?', [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = Blog;
