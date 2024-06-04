const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();

// GET all books
router.get('/', BookController.getAllBooks);

// GET a specific book
router.get('/:id', BookController.getBookById);

// POST a new book
router.post('/', BookController.createBook);

// PUT/update a book
router.put('/:id', BookController.updateBook);

// DELETE a book
router.delete('/:id', BookController.deleteBook);

module.exports = router;
