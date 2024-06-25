const express = require('express');
const authenticate = require('../middleware/authenticate');;
const authorize = require('../middleware/authorize');
const customerController = require('../controllers/customerController');

const router = express.Router();

// GET all customers
router.get('/', authenticate(), authorize(['admin', 'super']), customerController.getAll);

// GET a specific customer
router.get('/:id', authenticate(), authorize(['customer', 'admin', 'super']), customerController.getById);

// POST a new customer
router.post('/', authenticate(), authorize(['admin', 'super']), customerController.create);

// PUT/update a customer
router.put('/:id', authenticate(), customerController.update);

// // DELETE a customer
// router.delete('/:id', authorize(['admin', 'super']), customerController.delete);

module.exports = router;