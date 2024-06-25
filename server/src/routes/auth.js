const express = require('express');
const customerController = require('../controllers/customerController');
const authController = require('../controllers/authController');

const router = express.Router();

// Register a new customer
router.post('/register', customerController.create);

// Login
router.post('/login', authController.login);

module.exports = router;