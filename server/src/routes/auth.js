const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

// Register a new customer
router.post('/register', AuthController.register);

// Login
router.post('/login', AuthController.login);

// Logout
router.get('/logout', AuthController.logout);

module.exports = router;