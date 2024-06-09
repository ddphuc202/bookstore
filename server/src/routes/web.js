const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.getIndex);
router.get('/about', HomeController.getAbout);
router.get('/contact', HomeController.getContact);

module.exports = router;