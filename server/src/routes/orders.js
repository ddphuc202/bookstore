const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

// GET all orders
router.get('/', orderController.getAll);

// GET all orders by a customer ID
router.get('/customer/:customerId', orderController.getAllByCustomerId);

// GET a specific order
router.get('/:id', orderController.getById);

// POST a new order
router.post('/', orderController.create);

// PUT/update a order
router.put('/:id', orderController.update);

// DELETE a order
// router.delete('/:id', orderController.delete);

module.exports = router;
