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

    static getAllBooks(page, pageSize, sortBy, order, search, genre_id) {
        page = parseInt(page);
        if (isNaN(page)) {
            page = 1;
        }

        pageSize = parseInt(pageSize);
        if (isNaN(pageSize)) {
            pageSize = 10;
        }

        const offset = (page - 1) * pageSize;
        const searchQuery = '%' + search + '%';

        // Validate sortBy and order parameters to prevent SQL injection
        const validSortBy = ['created_at', 'price', 'genres.name'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) {
            sortBy = 'created_at';
        }

        if (!validOrder.includes(order)) {
            order = 'DESC';
        }

        const orderBy = `ORDER BY ${sortBy} ${order}`;

        const basePath = '/images/';

        let parameters = [searchQuery, searchQuery, searchQuery, pageSize, parseInt(offset)];

        let genreQuery = '';
        if (genre_id) {
            genreQuery = 'AND books.genre_id = ?';
            parameters.splice(3, 0, parseInt(genre_id));
        }

        const query = `SELECT books.*, genres.name AS genre_name, CONCAT('${basePath}', books.thumbnail) AS thumbnail_path
                       FROM books
                       LEFT JOIN genres ON books.genre_id = genres.id
                       WHERE (books.title LIKE ? OR books.author LIKE ? OR books.description LIKE ?) ${genreQuery} AND books.deleted_at IS NULL
                       ${orderBy} LIMIT ? OFFSET ?`;

        return this.queryDatabase(query, parameters);
    }

    static getBookById(id) {
        const basePath = '/images/';

        const bookQuery = `SELECT *, CONCAT('${basePath}', thumbnail) AS thumbnail_path FROM books WHERE id = ? AND deleted_at IS NULL`;

        const imagesQuery = `SELECT CONCAT('${basePath}', image) AS image_path FROM book_images WHERE book_id = ?`;

        return Promise.all([
            this.queryDatabase(bookQuery, [id]),
            this.queryDatabase(imagesQuery, [id])
        ]).then(([bookResults, imagesResults]) => {
            if (bookResults.length > 0) {
                const book = bookResults[0];
                book.images = imagesResults;
                return book;
            } else {
                return null;
            }
        });
    }

    static createBook(book, otherImages) {
        return this.queryDatabase('INSERT INTO books SET ?', book) // specific syntax for inserting data into a table by passing an object where the keys are the column names and the values are the values to be inserted
            .then(results => {
                const bookId = results.insertId;
                const imageQueries = [];

                // Insert other images
                otherImages.forEach(image => {
                    imageQueries.push(this.queryDatabase('INSERT INTO book_images (book_id, image) VALUES (?, ?)', [bookId, image]));
                });

                return Promise.all(imageQueries)
                    .then(() => bookId);
            });
    }

    static updateBook(id, book, otherImages) {
        return this.queryDatabase('UPDATE books SET ? WHERE id = ?', [book, id])
            .then(() => {
                const imageQueries = [];

                if (otherImages && otherImages.length > 0) { // empty array is truthy, so need to check length
                    imageQueries.push(this.queryDatabase('DELETE FROM book_images WHERE book_id = ?', id));

                    otherImages.forEach(image => {
                        imageQueries.push(this.queryDatabase('INSERT INTO book_images (book_id, image) VALUES (?, ?)', [id, image]));
                    });
                }
                return Promise.all(imageQueries)
                    .then(() => id);
            });
    }

    static deleteBook(id) {
        return this.queryDatabase('UPDATE books SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?', id);
    }
}

module.exports = Book;