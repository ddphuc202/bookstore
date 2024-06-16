const express = require('express');
const upload = require('../middlewares/Upload');
const BookController = require('../controllers/BookController');

const router = express.Router();

// GET all books
router.get('/', BookController.getAllBooks);

// GET a specific book
router.get('/:id', BookController.getBookById);

// POST a new book
router.post('/', upload.fields([{ name: 'primaryImage', maxCount: 1 }, { name: 'otherImages', maxCount: 4 }]), BookController.createBook);

// PUT/update a book
router.put('/:id', upload.fields([{ name: 'primaryImage', maxCount: 1 }, { name: 'otherImages', maxCount: 4 }]), BookController.updateBook);

// DELETE a book
router.delete('/:id', BookController.deleteBook);

module.exports = router;
