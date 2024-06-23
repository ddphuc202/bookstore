const db = require('../models');

const categoryController = {
    // Get all categories
    getAll: async (req, res) => {
        try {
            const categories = await db.Category.findAll({
                order: [['updatedAt', 'DESC']],
            });
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving categories', error });
        }
    },

    // Get category by ID
    getById: async (req, res) => {
        try {
            const category = await db.Category.findByPk(req.params.id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving category', error });
        }
    },

    // Create a new category
    create: async (req, res) => {
        try {
            const newCategory = await db.Category.create(req.body);
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json({ message: 'Error creating category', error });
        }
    },

    // Update a category
    update: async (req, res) => {
        try {
            const [updated] = await db.Category.update(req.body, { // array destructuring
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Category not found');
            }
            res.status(200).json({ message: 'Category updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating category', error });
        }
    },

    // Delete a category
    delete: async (req, res) => {
        try {
            const deleted = await db.Category.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Category not found');
            }
            res.status(200).json({ message: 'Category deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting category', error });
        }
    },
};

module.exports = categoryController;