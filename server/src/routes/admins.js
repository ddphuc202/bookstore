const express = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Statistic
router.get('/statistic', authenticate(), authorize(['super']), adminController.statistic);

// GET all admins
router.get('/', authenticate(), authorize(['super']), adminController.getAll);

// GET a specific admin
router.get('/:id', authenticate(), authorize(['super']), adminController.getById);

// POST a new admin
router.post('/', authenticate(), authorize(['super']), adminController.create);

// PUT/update an admin
router.put('/:id', authenticate(), authorize(['super']), adminController.update);

// SOFT-DELETE an admin
router.delete('/:id', authenticate(), authorize(['super']), adminController.softDelete);

// RESTORE a soft-deleted admin
router.patch('/restore/:id', authenticate(), authorize(['super']), adminController.restore);

module.exports = router;