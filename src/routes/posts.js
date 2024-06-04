const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();

// GET all posts
router.get('/', PostController.getAllPosts);

// GET a specific post
router.get('/:id', PostController.getPostById);

// POST a new post
router.post('/', PostController.createPost);

// PUT/update a post
router.put('/:id', PostController.updatePost);

// DELETE a post
router.delete('/:id', PostController.deletePost);

module.exports = router;
