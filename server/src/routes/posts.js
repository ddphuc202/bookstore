const express = require('express');
const upload = require('../middlewares/Upload');
const PostController = require('../controllers/PostController');

const router = express.Router();

// GET all posts
router.get('/', PostController.getAllPosts);

// GET a specific post
router.get('/:id', PostController.getPostById);

// POST a new post
router.post('/', upload.single('image'), PostController.createPost);

// PUT/update a post
router.put('/:id', upload.single('image'), PostController.updatePost);

// DELETE a post
router.delete('/:id', PostController.deletePost);

module.exports = router;
