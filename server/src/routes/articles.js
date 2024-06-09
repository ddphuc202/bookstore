const express = require('express');
const ArticleController = require('../controllers/ArticleController');

const router = express.Router();

// GET all articles
router.get('/', ArticleController.getAllArticles);

// GET a specific article
router.get('/:id', ArticleController.getArticleById);

// POST a new article
router.post('/', ArticleController.createArticle);

// PUT/update a article
router.put('/:id', ArticleController.updateArticle);

// DELETE a article
router.delete('/:id', ArticleController.deleteArticle);

module.exports = router;
