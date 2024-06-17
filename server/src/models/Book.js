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

        const query = `SELECT books.*, CONCAT('${basePath}', book_images.image_name) AS primary_image_path
                       FROM books 
                       LEFT JOIN book_images ON books.id = book_images.book_id AND book_images.is_primary = 1
                       WHERE (books.title LIKE ? OR books.author LIKE ? or books.description LIKE ?) ${genreQuery} AND books.deleted_at IS NULL 
                       ${orderBy} LIMIT ? OFFSET ?`;

        console.log(query);
        return this.queryDatabase(query, parameters);
    }

    static getBookById(id) {
        const bookQuery = 'SELECT * FROM books WHERE id = ? AND deleted_at IS NULL';

        const basePath = '/images/';

        const imagesQuery = `SELECT CONCAT('${basePath}', image_name) AS image_path, is_primary FROM book_images WHERE book_id = ?`;

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

    static createBook(book, primaryImageName, otherImageNames) {
        return this.queryDatabase('INSERT INTO books SET ?', book) // specific syntax for inserting data into a table by passing an object where the keys are the column names and the values are the values to be inserted
            .then(results => {
                const bookId = results.insertId;
                const imageQueries = [];

                // Insert primary image
                imageQueries.push(this.queryDatabase('INSERT INTO book_images (book_id, image_name, is_primary) VALUES (?, ?, 1)', [bookId, primaryImageName]));

                // Insert other images
                otherImageNames.forEach(imageName => {
                    imageQueries.push(this.queryDatabase('INSERT INTO book_images (book_id, image_name) VALUES (?, ?)', [bookId, imageName]));
                });

                return Promise.all(imageQueries)
                    .then(() => bookId);
            });
    }

    static updateBook(id, book) {
        return this.queryDatabase('UPDATE books SET ? WHERE id = ?', [book, id])
            .then(() => {
                const imageQueries = [];

                imageQueries.push(this.queryDatabase('DELETE FROM book_images WHERE book_id = ?', id));

                imageQueries.push(this.queryDatabase('INSERT INTO book_images (book_id, image_name, is_primary) VALUES (?, ?, 1)', [id, book.primaryImage]));

                imageQueries.push(this.queryDatabase('INSERT INTO book_images (book_id, image_name) VALUES (?, ?)', [id, book.otherImages]));

                return Promise.all(imageQueries)
                    .then(() => id);
            });
    }

    static deleteBook(id) {
        return this.queryDatabase('UPDATE books SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?', id);
    }
}

module.exports = Book;