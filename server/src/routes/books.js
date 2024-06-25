const express = require('express');
const upload = require('../middleware/upload');
const authorize = require('../middleware/authorize');
const bookController = require('../controllers/bookController');

const router = express.Router();

// GET all books
router.get('/', bookController.getAll);

// GET a specific book
router.get('/:id', bookController.getById);

// POST a new book
router.post('/', authorize(['admin', 'super']), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'otherImages', maxCount: 4 }]), bookController.create);

// PUT/update a book
router.put('/:id', authorize(['admin', 'super']), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'otherImages', maxCount: 4 }]), bookController.update);

// DELETE a book
router.delete('/:id', authorize(['admin', 'super']), bookController.delete);

module.exports = router;
