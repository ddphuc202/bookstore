const express = require('express');
const upload = require('../middleware/upload');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const bookController = require('../controllers/bookController');

const router = express.Router();

// GET all books for customer
router.get('/customer', bookController.getAllForCustomer);

// GET all books for admin
router.get('/admin', authenticate(), authorize(['admin', 'super']), bookController.getAllForAdmin);

// GET a specific book
router.get('/:id', bookController.getById);

// POST a new book
router.post('/', authenticate(), authorize(['admin', 'super']), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'otherImages', maxCount: 4 }]), bookController.create);

// PUT/update a book
router.put('/:id', authenticate(), authorize(['admin', 'super']), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'otherImages', maxCount: 4 }]), bookController.update);

// SOFT-DELETE a book
router.delete('/:id', authenticate(), authorize(['admin', 'super']), bookController.softDelete);

// RESTORE a soft-deleted book
router.patch('/restore/:id', authenticate(), authorize(['admin', 'super']), bookController.restore);

module.exports = router;
