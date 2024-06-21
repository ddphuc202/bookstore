const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

// GET all customers
router.get('/', customerController.getAll);

// GET a specific customer
router.get('/:id', customerController.getById);

// POST a new customer
router.post('/', customerController.create);

// PUT/update a customer
router.put('/:id', customerController.update);

// DELETE a customer
router.delete('/:id', customerController.delete);

module.exports = router;