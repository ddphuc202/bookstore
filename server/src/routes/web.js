const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getIndex);
router.get('/about', homeController.getAbout);
router.get('/contact', homeController.getContact);

module.exports = router;