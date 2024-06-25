const express = require('express');
const authorize = require('../middleware/authorize');
const customerController = require('../controllers/customerController');

const router = express.Router();

// GET all customers
router.get('/', authorize(['admin', 'super']), customerController.getAll);

// GET a specific customer
router.get('/:id', authorize(['customer', 'admin', 'super']), customerController.getById);

// POST a new customer
router.post('/', authorize(['admin', 'super']), customerController.create);

// PUT/update a customer
router.put('/:id', authorize(['customer', 'admin', 'super']), customerController.update);

// // DELETE a customer
// router.delete('/:id', authorize(['admin', 'super']), customerController.delete);

module.exports = router;