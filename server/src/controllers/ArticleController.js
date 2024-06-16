const Article = require('../models/Article');

const ArticleController = {
    getAllArticles: (req, res) => {
        Article.getAllArticles()
            .then(articles => {
                res.status(200).json(articles);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting articles', error: err });
            });
    },

    getArticleById: (req, res) => {
        const articleId = req.params.id;

        Article.getArticleById(articleId)
            .then(article => {
                res.status(200).json(article);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting article', error: err });
            });
    },

    createArticle: (req, res) => {
        const newArticleData = req.body;
        const imageName = req.file ? req.file.filename : null; // prevent TypeError if no image is uploaded

        console.log(imageName);
        newArticleData.image_name = imageName;

        Article.createArticle(newArticleData)
            .then(newArticleId => {
                res.status(201).json({ message: 'Article created successfully', id: newArticleId });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error creating article', error: err });
            });
    },

    updateArticle: (req, res) => {
        const articleId = req.params.id;
        const updatedArticleData = req.body;
        const imageName = req.file ? req.file.filename : null;

        updatedArticleData.image_name = imageName;

        Article.updateArticle(articleId, updatedArticleData)
            .then(updateResult => {
                res.status(200).json({ message: 'Article updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error updating article', error: err });
            });

    },

    deleteArticle: (req, res) => {
        const articleId = req.params.id;

        Article.deleteArticle(articleId)
            .then(deleteResult => {
                res.status(200).json({ message: 'Article deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error deleting article', error: err });
            });
    }
};

module.exports = ArticleController;
