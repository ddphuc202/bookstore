const { or } = require('sequelize');
const db = require('../models');
require('dotenv').config();

const orderController = {
    // Get all orders
    getAll: async (req, res) => {
        try {
            const orders = await db.Order.findAll({
                order: [['updatedAt', 'DESC']],
            });
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orders', error });
        }
    },

    // Get all orders by a customer ID
    getAllByCustomerId: async (req, res) => {
        try {
            const orders = await db.Order.findAll({
                where: { customerId: req.params.id },
                order: [['updatedAt', 'DESC']],
            });
            if (orders.length === 0) {
                return res.status(404).json({ message: 'No order found for this customer' });
            }
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orders', error });
        }
    },

    // Get order by ID
    getById: async (req, res) => {
        try {
            const order = await db.Order.findByPk(req.params.id, {
                include: [{
                    model: db.OrderDetail,
                    as: 'orderDetails',
                    attributes: ['quantity', 'price'],
                    include: [{
                        model: db.Book,
                        as: 'book',
                        attributes: ['title', ['thumbnail', 'thumbnailPath']],
                    }]
                }]
            });
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error });
        }
    },

    // Create a new order
    create: async (req, res) => {
        try {
            const cartItems = await db.CartItem.findAll({
                where: { customerId: req.body.customerId }
            })
            if (cartItems.length === 0) {
                return res.status(400).json({ message: 'Cart is empty' });
            }
            // const total = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);
            let total = 0;
            for (let i = 0; i < cartItems.length; i++) {
                total += cartItems[i].price * cartItems[i].quantity;
            }
            req.body.total = total;

            const newOrder = await db.Order.create(req.body);

            const orderDetails = cartItems.map(cartItem => ({
                orderId: newOrder.id,
                bookId: cartItem.bookId,
                quantity: cartItem.quantity,
                price: cartItem.price,
            }));
            await db.OrderDetail.bulkCreate(orderDetails);

            for (const detail of orderDetails) {
                const book = await db.Book.findByPk(detail.bookId);
                if (book) {
                    book.quantity -= detail.quantity;
                    book.save();
                }
            }

            await db.CartItem.destroy({
                where: { customerId: req.body.customerId }
            })

            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
    },

    // Update a order
    update: async (req, res) => {
        try {
            const [updated] = await db.Order.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Order not found');
            }
            res.status(200).json({ message: 'Order updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating order', error });
        }
    },

    // Delete a order
    // delete: async (req, res) => {
    //     try {
    //         const deleted = await db.Order.destroy({
    //             where: { id: req.params.id }
    //         });
    //         if (!deleted) {
    //             throw new Error('Order not found');
    //         }
    //         res.status(200).json({ message: 'Order deleted successfully' });
    //     } catch (error) {
    //         res.status(500).json({ message: 'Error deleting order', error });
    //     }
    // },
};

module.exports = orderController;