const db = require('../models');

const cartItemController = {
    // Get all cart items by a customer ID
    getAllByCustomerId: async (req, res) => {
        try {
            const customerId = req.params.customerId;
            const cartItems = await db.CartItem.findAll({
                where: { customerId: customerId },
            });
            if (cartItems.length === 0) {
                return res.status(404).json({ message: 'No cart item found for this customer' });
            }
            res.status(200).json(cartItems);
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
                existingCartItem.quantity += 1;
                await existingCartItem.save();
                res.status(200).json(existingCartItem);
            } else {
                const book = await db.Book.findByPk(req.body.bookId);
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