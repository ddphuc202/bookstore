const express = require('express');
const customerController = require('../controllers/customerController');
const authController = require('../controllers/authController');

const router = express.Router();

// Register a new customer
router.post('/register', customerController.create);

// // Login
// router.post('/login', AuthController.login);

// // Logout
// router.get('/logout', AuthController.logout);

module.exports = router;