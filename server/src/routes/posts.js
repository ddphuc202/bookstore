const express = require('express');
const upload = require('../middlewares/upload');
const postController = require('../controllers/postController');

const router = express.Router();

// GET all posts
router.get('/', postController.getAll);

// GET a specific post
router.get('/:id', postController.getById);

// POST a new post
router.post('/', upload.single('image'), postController.create);

// PUT/update a post
router.put('/:id', upload.single('image'), postController.update);

// DELETE a post
router.delete('/:id', postController.delete);

module.exports = router;