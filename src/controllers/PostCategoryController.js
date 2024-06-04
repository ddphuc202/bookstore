const PostCategory = require('../models/PostCategory');

// Define post category controller object
const PostCategoryController = {
    // Define controller methods 
    getAllPostCategories: (req, res) => {
        // Use the post category model to get all post categories from the database
        PostCategory.getAllPostCategories()
            .then(postCategories => {
                // If the post categories are retrieved successfully, send them in the response
                res.status(200).json(postCategories);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting post categories', error: err });
            });
    },

    getPostCategoryById: (req, res) => {
        // Get the post category ID from the request parameters
        const postCategoryId = req.params.id;

        // Use the post category model to get a specific post category from the database
        PostCategory.getPostCategoryById(postCategoryId)
            .then(postCategory => {
                // If the post category is retrieved successfully, send it in the response
                res.status(200).json(postCategory);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting post category', error: err });
            });
    },

    createPostCategory: (req, res) => {
        // Get the post category data from the request body
        const newPostCategoryData = req.body;

        // Use the post category model to create a new post category in the database
        PostCategory.createPostCategory(newPostCategoryData)
            .then(newPostCategoryId => {
                // If the post category was created successfully, send a success response
                res.status(201).json({ message: 'Post category created successfully', id: newPostCategoryId });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error creating post category', error: err });
            });
    },

    updatePostCategory: (req, res) => {
        // Get the post category ID from the request parameters
        const postCategoryId = req.params.id;
        // Get the updated post category data from the request body
        const updatedPostCategoryData = req.body;

        // Use the post category model to update the post category in the database
        PostCategory.updatePostCategory(postCategoryId, updatedPostCategoryData)
            .then(updateResult => {
                // If the post category was updated successfully, send a success response
                res.status(200).json({ message: 'Post category updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating post category', error: err });
            });

    },

    deletePostCategory: (req, res) => {
        // Get the post category ID from the request parameters
        const postCategoryId = req.params.id;

        // Use the post category model to delete the post category from the database
        PostCategory.deletePostCategory(postCategoryId)
            .then(deleteResult => {
                // If the post category was deleted successfully, send a success response
                res.status(200).json({ message: 'Post category deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting post category', error: err });
            });
    }
};

// Export the post category controller object
module.exports = PostCategoryController;
