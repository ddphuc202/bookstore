const db = require('../models');

const cartController = {
    // Get all carts
    getAll: async (req, res) => {
        try {
            const carts = await db.Cart.findAll();
            res.status(200).json(carts);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving carts', error });
        }
    },

    // Get cart by ID
    getById: async (req, res) => {
        try {
            const cart = await db.Cart.findByPk(req.params.id);
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving cart', error });
        }
    },

    // Create a new cart
    create: async (req, res) => {
        try {
            const cartData = req.body;
            if (req.file) {
                cartData.image = req.file.filename;
            }
            const newCart = await db.Cart.create(cartData);
            res.status(201).json(newCart);
        } catch (error) {
            res.status(500).json({ message: 'Error creating cart', error });
        }
    },

    // Update a cart
    update: async (req, res) => {
        try {
            const cartData = req.body;
            if (req.file) {
                cartData.image = req.file.filename;
            }
            const [updated] = await db.Cart.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Cart not found');
            }
            res.status(200).json({ message: 'Cart updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating cart', error });
        }
    },

    // Delete a cart
    delete: async (req, res) => {
        try {
            const deleted = await db.Cart.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Cart not found');
            }
            res.status(200).json({ message: 'Cart deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting cart', error });
        }
    },
};

module.exports = cartController;