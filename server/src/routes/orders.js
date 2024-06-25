const express = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');;
const orderController = require('../controllers/orderController');

const router = express.Router();

// GET all orders
router.get('/', authenticate(), authorize(['admin', 'super']), orderController.getAll);

// GET all orders by a customer ID
router.get('/customer/:id', authenticate(), orderController.getAllByCustomerId);

// GET a specific order
router.get('/:id', authenticate(), orderController.getById);

// POST a new order
router.post('/', authenticate(), orderController.create);

// PUT/update a order
router.put('/:id', authenticate(), orderController.update);

module.exports = router;
