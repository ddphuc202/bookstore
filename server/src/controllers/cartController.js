const db = require('../models');
require('dotenv').config();

const cartItemController = {
    // Get all cart items by a customer ID
    getAllByCustomerId: async (req, res) => {
        try {
            const cartItems = await db.Cart.findAll({
                where: { customerId: req.params.id },
                include: [
                    {
                        model: db.Book,
                        as: 'book',
                        attributes: ['title',
                            [db.sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', thumbnail)`), 'thumbnailPath'],
                            [db.sequelize.literal(`CAST((price - (price * discount / 100)) AS SIGNED)`), 'price']
                        ],
                    }
                ]
            });
            if (cartItems.length === 0) {
                return res.status(404).json({ message: 'No cart item found for this customer' });
            }
            res.status(200).json(cartItems);
        } catch (error) {
            console.log('Error retrieving cart items', error);
            res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
        }
    },

    // Create a new cart item
    create: async (req, res) => {
        try {
            const existingCart = await db.Cart.findOne({
                where: {
                    customerId: req.body.customerId,
                    bookId: req.body.bookId,
                }
            })
            if (existingCart) {
                const book = await db.Book.findByPk(req.body.bookId);
                if (!book) {
                    return res.status(404).json({ message: 'Book not found' });
                }
                if (existingCart.quantity + 1 > book.quantity) {
                    return res.status(400).json({ message: 'Requested quantity is greater than available quantity' });
                }
                existingCart.quantity += 1;
                await existingCart.save();
                res.status(200).json(existingCart);
            } else {
                const book = await db.Book.findByPk(req.body.bookId);
                if (!book) {
                    return res.status(404).json({ message: 'Book not found' });
                }
                const requestedQuantity = req.body.quantity || 1;
                if (requestedQuantity > book.quantity) {
                    return res.status(400).json({ message: 'Requested quantity is greater than available quantity' });
                }
                const discountedPrice = book.price - (book.price * book.discount / 100);
                req.body.price = discountedPrice;
                const newCart = await db.Cart.create(req.body);
                res.status(201).json(newCart);
            }
        } catch (error) {
            console.log('Error creating cart item', error);
            res.status(500).json({ message: 'Error creating cart item', error: error.message });
        }
    },

    // Update a cart item
    update: async (req, res) => {
        try {
            const cartItem = await db.Cart.findByPk(req.params.id);
            if (!cartItem) {
                return res.status(404).json({ message: 'Cart item not found' });
            }
            if (req.body.quantity == 0) {
                cartItem.destroy();
                return res.status(200).json({ message: 'Cart item deleted successfully' });
            }
            const book = await db.Book.findByPk(cartItem.bookId);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            if (req.body.quantity > book.quantity) {
                return res.status(400).json({ message: 'Requested quantity is greater than available quantity' });
            }
            const [updated] = await db.Cart.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Cart item not found');
            }
            res.status(200).json({ message: 'Cart item updated successfully' });
        } catch (error) {
            console.log('Error updating cart item', error);
            res.status(500).json({ message: 'Error updating cart item', error: error.message });
        }
    },

    // Delete a cart item
    delete: async (req, res) => {
        try {
            const deleted = await db.Cart.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Cart item not found');
            }
            res.status(200).json({ message: 'Cart item deleted successfully' });
        } catch (error) {
            console.log('Error deleting cart item', error);
            res.status(500).json({ message: 'Error deleting cart item', error: error.message });
        }
    },

    // Delete all cart items by a customer ID
    deleteAllByCustomerId: async (req, res) => {
        try {
            const deleted = await db.Cart.destroy({
                where: { customerId: req.params.id }
            });
            if (!deleted) {
                throw new Error('Cart items not found');
            }
            res.status(200).json({ message: 'Cart items deleted successfully' });
        } catch (error) {
            console.log('Error deleting cart items', error);
            res.status(500).json({ message: 'Error deleting cart items', error: error.message });
        }
    }
};

module.exports = cartItemController;