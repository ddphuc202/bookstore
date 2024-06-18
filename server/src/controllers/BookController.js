const Book = require('../models/Book');
const path = require('path');

const BookController = {
    getAllBooks: (req, res) => {
        const { page = 1, pageSize = 10, sortBy = 'created_at', order = 'DESC', genre_id, search = '' } = req.query;

        Book.getAllBooks(page, pageSize, sortBy, order, search, genre_id)
            .then(books => {
                res.status(200).json(books);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting books', error: err });
            });
    },

    getBookById: (req, res) => {
        const bookId = req.params.id;

        Book.getBookById(bookId)
            .then(book => {
                res.status(200).json(book);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting book', error: err });
            });
    },

    createBook: (req, res) => {
        const newBookData = req.body;

        let thumbnail = null;
        if (req.files.thumbnail) {
            thumbnail = path.basename(req.files.thumbnail[0].path);
            newBookData.thumbnail = thumbnail;
        }

        let otherImages = null;
        if (req.files.otherImages) {
            otherImages = req.files.otherImages.map(file => path.basename(file.path));
        }

        Book.createBook(newBookData, otherImages)
            .then(newBookId => {
                res.status(201).json({ message: 'Book created successfully', id: newBookId });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error creating book', error: err });
            });
    },

    updateBook: (req, res) => {
        const bookId = req.params.id;
        const updatedBookData = req.body;

        let thumbnail = null;
        if (req.files.thumbnail) {
            thumbnail = path.basename(req.files.thumbnail[0].path);
            updatedBookData.thumbnail = thumbnail;
        }

        let otherImages = null;
        if (req.files.otherImages) {
            otherImages = req.files.otherImages.map(file => path.basename(file.path));
        }

        Book.updateBook(bookId, updatedBookData, otherImages)
            .then(updateResult => {
                res.status(200).json({ message: 'Book updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error updating book', error: err });
            });

    },

    deleteBook: (req, res) => {
        const bookId = req.params.id;

        Book.deleteBook(bookId)
            .then(deleteResult => {
                res.status(200).json({ message: 'Book deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error deleting book', error: err });
            });
    }
};

module.exports = BookController;
