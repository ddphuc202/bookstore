const db = require('../models');

const BookImageController = {
    // Get all book images
    getAll: async (req, res) => {
        try {
            const bookImages = await db.BookImage.findAll();
            res.status(200).json(bookImages);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving book images', error });
        }
    },

    // Get book image by ID
    getById: async (req, res) => {
        try {
            const bookImage = await db.BookImage.findByPk(req.params.id);
            if (!bookImage) {
                return res.status(404).json({ message: 'Book image not found' });
            }
            res.status(200).json(bookImage);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving book image', error });
        }
    },

    // Create a new book image
    create: async (req, res) => {
        try {
            const newBookImage = await db.BookImage.create(req.body);
            res.status(201).json(newBookImage);
        } catch (error) {
            res.status(500).json({ message: 'Error creating book image', error });
        }
    },

    // Update a book image
    update: async (req, res) => {
        try {
            const [updated] = await db.BookImage.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Book image not found');
            }
            res.status(200).json({ message: 'Book image updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating book image', error });
        }
    },

    // Delete a book image
    delete: async (req, res) => {
        try {
            const deleted = await db.BookImage.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Book image not found');
            }
            res.status(200).json({ message: 'Book image deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting book image', error });
        }
    },
};

module.exports = BookImageController;