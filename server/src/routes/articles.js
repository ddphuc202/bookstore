const express = require('express');
const upload = require('../middlewares/Upload');
const ArticleController = require('../controllers/ArticleController');

const router = express.Router();

// GET all articles
router.get('/', ArticleController.getAllArticles);

// GET a specific article
router.get('/:id', ArticleController.getArticleById);

// POST a new article
router.post('/', upload.single('image'), ArticleController.createArticle);

// PUT/update a article
router.put('/:id', upload.single('image'), ArticleController.updateArticle);

// DELETE a article
router.delete('/:id', ArticleController.deleteArticle);

module.exports = router;
