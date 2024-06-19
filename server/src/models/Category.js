const pool = require('../config/database');

class Category {
    constructor(name) {
        this.name = name;
    }

    static getAllCategories() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM categories WHERE deleted_at IS NULL ORDER BY updated_at DESC', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getCategoryById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM categories WHERE id = ? AND deleted_at IS NULL', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createCategory(category) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO categories SET ?', category, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updateCategory(id, category) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE categories SET ? WHERE id = ?', [category, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }

    static deleteCategory(id) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE categories SET deleted_at = NOW() WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }
}

module.exports = Category;
