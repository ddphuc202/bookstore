const pool = require('../config/database');

class Article {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static getAllArticles() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM articles WHERE deleted_at IS NULL', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getArticleById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM articles WHERE id = ? AND deleted_at IS NULL', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createArticle(article) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO articles SET ?', article, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updateArticle(id, article) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE articles SET ? WHERE id = ?', [article, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }

    static deleteArticle(id) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE articles SET deleted_at = NOW() WHERE id = ?', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.affectedRows);
            });
        });
    }
}

module.exports = Article;
