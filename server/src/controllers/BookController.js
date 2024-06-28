const db = require('../models');
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const booksController = {
    // Get all books
    getAll: async (req, res) => {
        try {
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
            const whereClause = {};
            whereClause.quantity = { [Op.gt]: 0 };
            if (categoryId) {
                whereClause.categoryId = categoryId;
            }
            if (search) {
                const searchCondition = {
                    [Op.or]: [
                        { title: { [Op.like]: `%${search}%` } },
                        { author: { [Op.like]: `%${search}%` } },
                        { description: { [Op.like]: `%${search}%` } },
                    ]
                };
                whereClause[Op.or] = searchCondition[Op.or];
            }

            const totalBooks = await db.Book.count({
                where: whereClause
            });
            const totalPages = Math.ceil(totalBooks / limit);

            const books = await db.Book.findAll({
                where: whereClause,
                attributes: {
                    include: [
                        [db.Sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', thumbnail)`), 'thumbnailPath'],
                    ]
                },
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

            res.status(200).json({ books, totalPages });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving books', error });
        }
    },

    // Get book by ID
    getById: async (req, res) => {
        try {
            const book = await db.Book.findByPk(req.params.id, {
                attributes: {
                    include: [
                        [db.Sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', thumbnail)`), 'thumbnailPath']
                    ]
                },
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
                            [db.Sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', image)`), 'imagePath']
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
                bookImages: otherImages // association should be BookImages not BookImage
            }, {
                include: [
                    {
                        model: db.BookImage,
                        as: 'bookImages',
                    }
                ]
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
                const currentThumbnail = await db.Book.findByPk(req.params.id, {
                    attributes: ['thumbnail']
                });
                const thumbnailPath = path.join(__dirname, '../public', process.env.IMAGE_PATH, currentThumbnail.thumbnail);
                fs.unlink(thumbnailPath, (err) => {
                    if (err) console.log('Error deleting thumbnail: ', thumbnailPath);
                    else console.log('Successfully deleted thumbnail: ', thumbnailPath);
                });
                bookData.thumbnail = req.files.thumbnail[0].filename;
            }
            let otherImages = [];
            if (req.files && req.files.otherImages) {
                const currentImages = await db.BookImage.findAll({
                    where: { bookId: req.params.id }
                });
                currentImages.forEach(image => {
                    const imagePath = path.join(__dirname, '../public', process.env.IMAGE_PATH, image.image);
                    fs.unlink(imagePath, (err) => {
                        if (err) console.log('Error deleting image: ', imagePath);
                        else console.log('Successfully deleted image: ', imagePath);
                    });
                });
                await db.BookImage.destroy({ where: { bookId: req.params.id } });

                otherImages = req.files.otherImages.map(image => image.filename);
                await db.BookImage.bulkCreate(otherImages.map(image => ({ image: image, bookId: req.params.id })));
            }

            const [updated] = await db.Book.update(bookData, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Book not found');
            }

            res.status(200).json({ message: 'Book updated successfully' });
        } catch (error) {
            console.log('Error updating book: ', error);
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

            res.status(200).json({ message: 'Book soft deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error soft deleting book', error });
        }
    },
};

module.exports = booksController;