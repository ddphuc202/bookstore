// Import database
const db = require('../common/connectDB');

class Book {
    // Book has (title, author, description, price, stock)
    constructor(title, author, description, price, stock, sale_percent) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.sale_percent = sale_percent;
    }

    // Create a new book
    static create(title, author, description, price, stock, sale_percent) {
        const newBook = new Book(title, author, description, price, stock, sale_percent);
        // Add code to save the new book to the database or storage
        return newBook;
    }

    // Get all books with db above
    static getAll(result) {
        db.query('SELECT * FROM books', (err, res) => {
            if (err) {
                console.error('Error getting all books:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }

    // Get a book by ID
    static getById(id, result) {
        db.query('SELECT * FROM books WHERE id = ?', [id], (err, res) => {
            if (err) {
                console.error('Error getting book by ID:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }

    // Update a book id
    static update(id, book, result) {
        db.query('UPDATE books SET title = ?, author = ?, description = ?, price = ?, stock = ?, sale_percent = ? WHERE id = ?', [book.title, book.author, book.description, book.price, book.stock, book.sale_percent, id], (err, res) => {
            if (err) {
                console.error('Error updating book:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }

    // Soft delete a book by ID
    static delete(id, result) {
        db.query('DELETE FROM books WHERE id = ?', [id], (err, res) => {
            if (err) {
                console.error('Error deleting book:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }
}

module.exports = Book;