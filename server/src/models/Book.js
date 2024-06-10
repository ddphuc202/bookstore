const pool = require('../config/database');

class Book {
    constructor(title, description, price, author, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.author = author;
        this.stock = stock;
    }

    static getAllBooks() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM books WHERE deleted_at IS NULL ORDER BY updated_at DESC', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getBookById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM books WHERE id = ? AND deleted_at IS NULL', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createBook(book) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO books SET ?', book, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updateBook(id, book) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE books SET ? WHERE id = ?', [book, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }

    static deleteBook(id) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE books SET deleted_at = NOW() WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }
}

module.exports = Book;