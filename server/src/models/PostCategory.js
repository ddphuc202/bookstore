const pool = require('../config/database');

class PostCategory {
    constructor(name) {
        this.name = name;
    }

    static getAllPostCategories() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post_categories WHERE deleted_at IS NULL', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getPostCategoryById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post_categories WHERE id = ? AND deleted_at IS NULL', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createPostCategory(newCategory) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO post_categories SET ?', newCategory, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updatePostCategory(id, updatedCategory) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE post_categories SET ? WHERE id = ?', [updatedCategory, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static deletePostCategory(id) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE post_categories SET deleted_at = NOW() WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }
}

module.exports = PostCategory;