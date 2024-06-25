const express = require('express');
const authorize = require('../middleware/authorize');;
const orderController = require('../controllers/orderController');

const router = express.Router();

// GET all orders
router.get('/', authorize(['admin', 'super']), orderController.getAll);

// GET all orders by a customer ID
router.get('/customer/:id', authorize(['customer', 'admin', 'super']), orderController.getAllByCustomerId);

// GET a specific order
router.get('/:id', authorize(['admin', 'super']), orderController.getById);

// POST a new order
router.post('/', authorize(['customer', 'admin', 'super']), orderController.create);

// PUT/update a order
router.put('/:id', authorize(['customer', 'admin', 'super']), orderController.update);

module.exports = router;
