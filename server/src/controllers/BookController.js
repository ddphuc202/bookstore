const { where } = require('sequelize');
const db = require('../models');

const booksController = {
    // Get all books
    getAll: async (req, res) => {
        let { page = 1, limit = 8, sortBy = 'updatedAt', order = 'DESC', categoryId, search } = req.query;
        let offset = (page - 1) * limit;
        if (offset < 0) {
            offset = 0;
        }
        const validSortBy = ['updatedAt', 'price'];
        if (!validSortBy.includes(sortBy)) {
            sortBy = 'updatedAt';
        }
        const validOrder = ['ASC', 'DESC'];
        if (!validOrder.includes(order)) {
            order = 'DESC';
        }
        const basePath = '/images/';
        const whereClause = {};
        if (categoryId) {
            whereClause.categoryId = categoryId;
        }
        if (search) {
            whereClause.title = { [Op.like]: `%${search}%` };
            whereClause.author = { [Op.like]: `%${search}%` };
            whereClause.description = { [Op.like]: `%${search}%` };
        }

        try {
            const books = await db.Book.findAll({
                where: whereClause,
                include: [
                    {
                        model: db.Category,
                        as: 'category',
                        attributes: ['name'],
                    }
                ],
                order: [[sortBy, order]],
                limit: parseInt(limit),
                offset: parseInt(offset),
            });
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving books', error });
        }
    },

    // Get book by ID
    getById: async (req, res) => {
        try {
            const basePath = '/images/';
            const book = await db.Book.findByPk(req.params.id, {
                include: [
                    {
                        model: db.Category,
                        as: 'category',
                        attributes: ['name'],
                    },
                    {
                        model: db.BookImage,
                        as: 'bookImages',
                        attributes: [
                            [db.sequelize.literal(`CONCAT('${basePath}', image)`), 'image']
                        ],
                    },
                ],
            });
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving book', error });
        }
    },

    // Create a new book
    create: async (req, res) => {
        try {
            let bookData = req.body;
            if (req.files && req.files.thumbnail) {
                bookData.thumbnail = req.files.thumbnail[0].filename;
            }
            let otherImages = [];
            if (req.files && req.files.otherImages) {
                otherImages = req.files.otherImages.map(image => ({ image: image.filename })); // BookImage expects "image" field not "filename"
            }
            const newBook = await db.Book.create({
                ...bookData, // spread operator
                BookImages: otherImages // association should be BookImages not BookImage
            }, {
                include: [db.BookImage]
            });
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: 'Error creating book', error });
        }
    },

    // Update a book
    update: async (req, res) => {
        try {
            let bookData = req.body;
            if (req.files && req.files.thumbnail) {
                bookData.thumbnail = req.files.thumbnail[0].filename;
            }
            let otherImages = [];
            if (req.files && req.files.otherImages) {
                otherImages = req.files.otherImages.map(image => image.filename);
            }
            const [updated] = await db.Book.update(bookData, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Book not found');
            }
            await db.BookImage.destroy({
                where: { bookId: req.params.id }
            })

            await db.BookImage.destroy({ where: { bookId: req.params.id } });
            await db.BookImage.bulkCreate(otherImages.map(image => ({ image: image, bookId: req.params.id })));

            res.status(200).json({ message: 'Book updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating book', error });
        }
    },

    // Delete a book
    delete: async (req, res) => {
        try {
            const deleted = await db.Book.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Book not found');
            }
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting book', error });
        }
    },
};

module.exports = booksController;