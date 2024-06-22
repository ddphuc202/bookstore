const express = require('express');
const cartItemController = require('../controllers/cartItemController');

const router = express.Router();

// GET all cart items of a customer
router.get('/:customerId', cartItemController.getAllByCustomerId);

// POST a new cart items
router.post('/', cartItemController.create);

// PUT/update a cart item
router.put('/:id', cartItemController.update);

// DELETE a cart item
router.delete('/:id', cartItemController.delete);

module.exports = router;