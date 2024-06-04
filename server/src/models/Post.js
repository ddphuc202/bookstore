const pool = require('../config/database');

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static getAllPosts() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM posts', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getPostById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM posts WHERE id = ?', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createPost(post) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO posts SET ?', post, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updatePost(id, post) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE posts SET ? WHERE id = ?', [post, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }

    static deletePost(id) {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM posts WHERE id = ?', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.affectedRows);
            });
        });
    }
}

module.exports = Post;
