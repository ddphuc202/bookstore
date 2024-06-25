const express = require('express');
const authorize = require('../middleware/authorize');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/', categoryController.getAll);

// GET a specific category
router.get('/:id', authorize(['admin', 'super']), categoryController.getById);

// POST a new category
router.post('/', authorize(['admin', 'super']), categoryController.create);

// PUT/update a category
router.put('/:id', authorize(['admin', 'super']), categoryController.update);

// DELETE a category
router.delete('/:id', authorize(['admin', 'super']), categoryController.delete);

module.exports = router;
