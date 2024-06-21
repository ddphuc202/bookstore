const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/', categoryController.getAll);

// GET a specific category
router.get('/:id', categoryController.getById);

// POST a new category
router.post('/', categoryController.create);

// PUT/update a category
router.put('/:id', categoryController.update);

// DELETE a category
router.delete('/:id', categoryController.delete);

module.exports = router;
