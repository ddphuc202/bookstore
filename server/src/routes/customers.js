const express = require('express');
const CustomerController = require('../controllers/CustomerController');

const router = express.Router();

// GET all customers
router.get('/', CustomerController.getAllCustomers);

// GET a specific customer
router.get('/:id', CustomerController.getCustomerById);

// POST a new customer
router.post('/', CustomerController.createCustomer);

// PUT/update a customer
router.put('/:id', CustomerController.updateCustomer);

// DELETE a customer
router.delete('/:id', CustomerController.deleteCustomer);

module.exports = router;