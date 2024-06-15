const Book = require('../models/Book');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Define book controller object
const BookController = {
    // Define controller methods here
    getAllBooks: (req, res) => {
        // Get the sortBy, order, and search parameters from the request query
        const { page = 1, pageSize = 10, sortBy = 'created_at', order = 'DESC', search = '' } = req.query;

        // Use the book model to get all books from the database
        Book.getAllBooks(page, pageSize, search, sortBy, order)
            .then(books => {
                // If the books are retrieved successfully, send them in the response
                res.status(200).json(books);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting books', error: err });
            });
    },
    getBookById: (req, res) => {
        // Get the book ID from the request parameters
        const bookId = req.params.id;

        // Use the book model to get a specific book from the database
        Book.getBookById(bookId)
            .then(book => {
                // If the book is retrieved successfully, send it in the response
                res.status(200).json(book);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting book', error: err });
            });
    },

    createBook: (req, res) => {
        // Get the book data from the request body
        const newBookData = req.body;

        // Use the book model to create a new book in the database
        Book.createBook(newBookData)
            .then(newBookId => {
                // If the book was created successfully, send a success response
                res.status(201).json({ message: 'Book created successfully', id: newBookId });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error creating book', error: err });
            });
    },

    updateBook: (req, res) => {
        // Get the book ID from the request parameters
        const bookId = req.params.id;
        // Get the updated book data from the request body
        const updatedBookData = req.body;

        // Use the book model to update the book in the database
        Book.updateBook(bookId, updatedBookData)
            .then(updateResult => {
                // If the book was updated successfully, send a success response
                res.status(200).json({ message: 'Book updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating book', error: err });
            });

    },

    deleteBook: (req, res) => {
        // Get the book ID from the request parameters
        const bookId = req.params.id;

        // Use the book model to delete the book from the database
        Book.deleteBook(bookId)
            .then(deleteResult => {
                // If the book was deleted successfully, send a success response
                res.status(200).json({ message: 'Book deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting book', error: err });
            });
    }
};

// Export the book controller object
module.exports = BookController;