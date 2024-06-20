const pool = require('../config/database');

class Article {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static queryDatabase(query, params) {
        return new Promise((resolve, reject) => {
            pool.query(query, params, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getAllArticles() {
        return this.queryDatabase('SELECT * FROM articles WHERE deleted_at IS NULL')
    };

    static getArticleById(id) {
        return this.queryDatabase('SELECT * FROM articles WHERE id = ? AND deleted_at IS NULL', id);
    }

    static createArticle(newArticleData) {
        return this.queryDatabase('INSERT INTO articles SET ?', newArticleData);
    }

    static updateArticle(id, article) {
        return this.queryDatabase('UPDATE articles SET ? WHERE id = ?', [article, id]);
    }

    static deleteArticle(id) {
        return this.queryDatabase('UPDATE articles SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?', id);
    }
}

module.exports = Article;
