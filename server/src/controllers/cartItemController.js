const db = require('../models');
require('dotenv').config();

const cartItemController = {
    // Get all cart items by a customer ID
    getAllByCustomerId: async (req, res) => {
        try {

            const cartItems = await db.CartItem.findAll({
                where: { customerId: req.params.id },
                include: [
                    {
                        model: db.Book,
                        as: 'book',
                        attributes: ['title', ['thumbnail', 'thumbnailPath']],
                    }
                ]
            });
            if (cartItems.length === 0) {
                return res.status(404).json({ message: 'No cart item found for this customer' });
            }
            const updatedCartItems = cartItems.map(item => {
                /*Access thumbnailPath through item.book.dataValues.thumbnailPath instead of item.book.thumbnailPath. 
                This adjustment is necessary because Sequelize models store the actual data in the dataValues object, 
                especially when dealing with raw queries or when you need to manipulate the data after fetching it 
                from the database.
                */
                item.book.dataValues.thumbnailPath = `${process.env.IMAGE_PATH}${item.book.dataValues.thumbnailPath}`;
                return item;
            });
            res.status(200).json(updatedCartItems);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving cart items', error });
        }
    },

    // Create a new cart item
    create: async (req, res) => {
        try {
            const existingCartItem = await db.CartItem.findOne({
                where: {
                    customerId: req.body.customerId,
                    bookId: req.body.bookId,
                }
            })
            if (existingCartItem) {
                const book = await db.Book.findByPk(req.body.bookId);
                if (!book) {
                    return res.status(404).json({ message: 'Book not found' });
                }
                if (existingCartItem.quantity + 1 > book.quantity) {
                    return res.status(400).json({ message: 'Requested quantity is greater than available quantity' });
                }
                existingCartItem.quantity += 1;
                await existingCartItem.save();
                res.status(200).json(existingCartItem);
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
                const newCartItem = await db.CartItem.create(req.body);
                res.status(201).json(newCartItem);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error creating cart item', error });
        }
    },

    // Update a cart item
    update: async (req, res) => {
        try {
            const cartItem = await db.CartItem.findByPk(req.params.id);
            if (!cartItem) {
                return res.status(404).json({ message: 'Cart item not found' });
            }
            const book = await db.Book.findByPk(cartItem.bookId);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            if (req.body.quantity > book.quantity) {
                return res.status(400).json({ message: 'Requested quantity is greater than available quantity' });
            }
            const [updated] = await db.CartItem.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Cart item not found');
            }
            res.status(200).json({ message: 'Cart item updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating cart item', error });
        }
    },

    // Delete a cart item
    delete: async (req, res) => {
        try {
            const deleted = await db.CartItem.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Cart item not found');
            }
            res.status(200).json({ message: 'Cart item deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting cart item', error });
        }
    },
};

module.exports = cartItemController;