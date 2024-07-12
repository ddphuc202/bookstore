const express = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/', categoryController.getAll);

// GET a specific category
router.get('/:id', authenticate(), authorize(['admin', 'super']), categoryController.getById);

// POST a new category
router.post('/', authenticate(), authorize(['admin', 'super']), categoryController.create);

// PUT/update a category
router.put('/:id', authenticate(), authorize(['admin', 'super']), categoryController.update);

module.exports = router;
