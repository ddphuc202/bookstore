const pool = require('../config/database');

class Book {
    constructor(title, description, price, author, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.author = author;
        this.stock = stock;
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

    static getAllBooks(page, pageSize, search, sortBy, order) {
        const offset = (page - 1) * pageSize;
        const searchQuery = '%' + search + '%';

        // Validate sortBy and order parameters to prevent SQL injection
        const validSortBy = ['created_at', 'price'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) {
            sortBy = 'created_at';
        }

        if (!validOrder.includes(order)) {
            order = 'DESC';
        }

        const orderBy = `ORDER BY ${sortBy} ${order}`;
        const query = `SELECT * FROM books WHERE (title LIKE ? OR author LIKE ? or description LIKE ?) AND deleted_at IS NULL ${orderBy} LIMIT ? OFFSET ?`;

        return this.queryDatabase(query, [searchQuery, searchQuery, searchQuery, parseInt(pageSize), parseInt(offset)]);
    }

    static getBookById(id) {
        return this.queryDatabase('SELECT * FROM books WHERE id = ? AND deleted_at IS NULL', id)
            .then(results => results[0]);
    }

    static createBook(book) {
        return this.queryDatabase('INSERT INTO books SET ?', book)
            .then(results => results.insertId);
    }

    static updateBook(id, book) {
        return this.queryDatabase('UPDATE books SET ? WHERE id = ?', [book, id]);
    }

    static deleteBook(id) {
        return this.queryDatabase('UPDATE books SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?', id);
    }
}

module.exports = Book;