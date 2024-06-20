const express = require('express');
const CategoryController = require('../controllers/CategoryController');

const router = express.Router();

// GET all categories
router.get('/', CategoryController.getAllCategories);

// GET a specific category
router.get('/:id', CategoryController.getCategoryById);

// POST a new category
router.post('/', CategoryController.createCategory);

// PUT/update a category
router.put('/:id', CategoryController.updateCategory);

// DELETE a category
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
