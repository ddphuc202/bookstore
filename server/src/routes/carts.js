const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

// GET all carts
router.get('/', cartController.getAll);

// GET a specific cart
router.get('/:id', cartController.getById);

// POST a new cart
router.post('/', cartController.create);

// PUT/update a cart
router.put('/:id', cartController.update);

// DELETE a cart
router.delete('/:id', cartController.delete);

module.exports = router;