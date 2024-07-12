const express = require('express');
const authenticate = require('../middleware/authenticate');;
const authorize = require('../middleware/authorize');
const cartController = require('../controllers/cartController');

const router = express.Router();

// GET all cart items of a customer
router.get('/customer/:id', authenticate(), cartController.getAllByCustomerId);

// POST a new cart items
router.post('/item', authenticate(), cartController.create);

// PUT/update a cart item
router.put('/item/:id', authenticate(), cartController.update);

// DELETE a cart item
router.delete('/item/:id', authenticate(), cartController.delete);

module.exports = router;