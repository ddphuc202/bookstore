const express = require('express');
const PostCategoryController = require('../controllers/PostCategoryController');

const router = express.Router();

// GET all post categories
router.get('/', PostCategoryController.getAllPostCategories);

// GET a specific post category
router.get('/:id', PostCategoryController.getPostCategoryById);

// POST a new post category
router.post('/', PostCategoryController.createPostCategory);

// PUT/update a post category
router.put('/:id', PostCategoryController.updatePostCategory);

// DELETE a post category
router.delete('/:id', PostCategoryController.deletePostCategory);

module.exports = router;