const express = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const upload = require('../middleware/upload');
const postController = require('../controllers/postController');

const router = express.Router();

// GET all posts
router.get('/', postController.getAll);

// GET a specific post
router.get('/:id', postController.getById);

// POST a new post
router.post('/', authenticate(), authorize(['admin', 'super']), upload.single('image'), postController.create);

// PUT/update a post
router.put('/:id', authenticate(), authorize(['admin', 'super']), upload.single('image'), postController.update);

// DELETE a post
router.delete('/:id', authenticate(), authorize(['admin', 'super']), postController.delete);

module.exports = router;