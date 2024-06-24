const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

// GET all cart items of a customer
router.get('/customer/:id', cartController.getAllByCustomerId);

// POST a new cart items
router.post('/item', cartController.create);

// PUT/update a cart item
router.put('/item/:id', cartController.update);

// DELETE a cart item
router.delete('/item/:id', cartController.delete);

// DELETE all cart items of a customer
router.delete('/customer/:id', cartController.deleteAllByCustomerId);

module.exports = router;