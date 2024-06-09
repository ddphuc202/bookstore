const Article = require('../models/Article');

// Define article controller object
const ArticleController = {
    // Define controller methods 
    getAllArticles: (req, res) => {
        // Use the article model to get all articles from the database
        Article.getAllArticles()
            .then(articles => {
                // If the articles are retrieved successfully, send them in the response
                res.status(200).json(articles);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting articles', error: err });
            });
    },

    getArticleById: (req, res) => {
        // Get the article ID from the request parameters
        const articleId = req.params.id;

        // Use the article model to get a specific article from the database
        Article.getArticleById(articleId)
            .then(article => {
                // If the article is retrieved successfully, send it in the response
                res.status(200).json(article);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting article', error: err });
            });
    },

    createArticle: (req, res) => {
        // Get the article data from the request body
        const newArticleData = req.body;

        // Use the article model to create a new article in the database
        Article.createArticle(newArticleData)
            .then(newArticleId => {
                // If the article was created successfully, send a success response
                res.status(201).json({ message: 'Article created successfully', id: newArticleId });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error creating article', error: err });
            });
    },

    updateArticle: (req, res) => {
        // Get the article ID from the request parameters
        const articleId = req.params.id;
        // Get the updated article data from the request body
        const updatedArticleData = req.body;

        // Use the article model to update the article in the database
        Article.updateArticle(articleId, updatedArticleData)
            .then(updateResult => {
                // If the article was updated successfully, send a success response
                res.status(200).json({ message: 'Article updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating article', error: err });
            });

    },

    deleteArticle: (req, res) => {
        // Get the article ID from the request parameters
        const articleId = req.params.id;

        // Use the article model to delete the article from the database
        Article.deleteArticle(articleId)
            .then(deleteResult => {
                // If the article was deleted successfully, send a success response
                res.status(200).json({ message: 'Article deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting article', error: err });
            });
    }
};

// Export the article controller object
module.exports = ArticleController;
