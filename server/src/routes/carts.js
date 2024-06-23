const express = require('express');
const cartItemController = require('../controllers/cartItemController');

const router = express.Router();

// GET all cart items of a customer
router.get('/customer/:id', cartItemController.getAllByCustomerId);

// POST a new cart items
router.post('/item', cartItemController.create);

// PUT/update a cart item
router.put('/item/:id', cartItemController.update);

// DELETE a cart item
router.delete('/item/:id', cartItemController.delete);

module.exports = router;