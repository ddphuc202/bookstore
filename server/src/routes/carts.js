const express = require('express');
const authorize = require('../middleware/authorize');
const cartController = require('../controllers/cartController');

const router = express.Router();

// GET all cart items of a customer
router.get('/customer/:id', authorize(['customer', 'admin', 'super']), cartController.getAllByCustomerId);

// POST a new cart items
router.post('/item', authorize(['customer', 'admin', 'super']), cartController.create);

// PUT/update a cart item
router.put('/item/:id', authorize(['customer', 'admin', 'super']), cartController.update);

// DELETE a cart item
router.delete('/item/:id', authorize(['customer', 'admin', 'super']), cartController.delete);

// DELETE all cart items of a customer
router.delete('/customer/:id', authorize(['customer', 'admin', 'super']), cartController.deleteAllByCustomerId);

module.exports = router;