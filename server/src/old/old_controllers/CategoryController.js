const Category = require('../models/Category');

// Import any necessary modules or dependencies

// Define category controller object
const CategoryController = {
    // Define controller methods here
    getAllCategories: (req, res) => {
        // Use the category model to get all categories from the database
        Category.getAllCategories()
            .then(categories => {
                // If the categories are retrieved successfully, send them in the response
                res.status(200).json(categories);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting categories', error: err });
            });
    },

    getCategoryById: (req, res) => {
        // Get the category ID from the request parameters
        const categoryId = req.params.id;

        // Use the category model to get a specific category from the database
        Category.getCategoryById(categoryId)
            .then(category => {
                // If the category is retrieved successfully, send it in the response
                res.status(200).json(category);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting category', error: err });
            });
    },

    createCategory: (req, res) => {
        // Get the category data from the request body
        const newCategoryData = req.body;

        // Use the category model to create a new category in the database
        Category.createCategory(newCategoryData)
            .then(newCategoryId => {
                // If the category was created successfully, send a success response
                res.status(201).json({ message: 'Category created successfully', id: newCategoryId });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error creating category', error: err });
            });
    },

    updateCategory: (req, res) => {
        // Get the category ID from the request parameters
        const categoryId = req.params.id;
        // Get the updated category data from the request body
        const updatedCategoryData = req.body;

        // Use the category model to update the category in the database
        Category.updateCategory(categoryId, updatedCategoryData)
            .then(updateResult => {
                // If the category was updated successfully, send a success response
                res.status(200).json({ message: 'Category updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating category', error: err });
            });

    },

    deleteCategory: (req, res) => {
        // Get the category ID from the request parameters
        const categoryId = req.params.id;

        // Use the category model to delete the category from the database
        Category.deleteCategory(categoryId)
            .then(deleteResult => {
                // If the category was deleted successfully, send a success response
                res.status(200).json({ message: 'Category deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting category', error: err });
            });
    }
};

// Export the category controller object
module.exports = CategoryController;
