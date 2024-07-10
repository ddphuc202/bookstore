const { or } = require('sequelize');
const db = require('../models');
require('dotenv').config();

const orderController = {
    // Get all orders
    getAll: async (req, res) => {
        try {
            let { page = 1, limit = 10 } = req.query;
            let offset = (page - 1) * limit;
            if (offset < 0) {
                offset = 0;
            }
            const totalOrders = await db.Order.count();
            const totalPages = Math.ceil(totalOrders / limit);
            const orders = await db.Order.findAll({
                order: [['updatedAt', 'ASC']],
            });
            res.status(200).json({ orders, totalPages });
        } catch (error) {
            console.log('Error retrieving orders', error);
            res.status(500).json({ message: 'Error retrieving orders', error: error.message });
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
            console.log('Error retrieving orders', error);
            res.status(500).json({ message: 'Error retrieving orders', error: error.message });
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
                        attributes: ['title',
                            [db.sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', thumbnail)`), 'thumbnailPath'],
                        ]
                    }]
                }]
            });
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            console.log('Error retrieving order', error);
            res.status(500).json({ message: 'Error retrieving order', error: error.message });
        }
    },

    // Create a new order
    create: async (req, res) => {
        try {
            const carts = await db.Cart.findAll({
                where: { customerId: req.body.customerId },
                include: [{
                    model: db.Book,
                    as: 'book',
                    attributes: [[db.sequelize.literal(`CAST((price - (price * discount / 100)) AS SIGNED)`), 'price']],
                }]
            });
            if (carts.length == 0) {
                return res.status(400).json({ message: 'Cart is empty' });
            }
            let total = 0;
            for (let i = 0; i < carts.length; i++) {
                const book = carts[i].book;
                carts[i].price = book.dataValues.price;
                total += carts[i].price * carts[i].quantity;
            }
            req.body.total = total;

            const newOrder = await db.Order.create(req.body);

            const orderDetails = carts.map(cartItem => ({
                orderId: newOrder.id,
                bookId: cartItem.bookId,
                quantity: cartItem.quantity,
                price: cartItem.price
            }));
            await db.OrderDetail.bulkCreate(orderDetails);

            for (const detail of orderDetails) {
                const book = await db.Book.findByPk(detail.bookId);
                if (book) {
                    book.quantity -= detail.quantity;
                    book.save();
                }
            }

            await db.Cart.destroy({
                where: { customerId: req.body.customerId }
            });

            res.status(201).json(newOrder);
        } catch (error) {
            console.log('Error creating order', error);
            res.status(500).json({ message: 'Error creating order', error: error.message });
        }
    },

    // Update a order
    update: async (req, res) => {
        try {
            if (req.body.status && req.body.status === 'cancelled') {
                const orderDetails = await db.OrderDetail.findAll({
                    where: { orderId: req.params.id }
                });
                for (const detail of orderDetails) {
                    await db.Book.increment('quantity', {
                        by: detail.quantity,
                        where: { id: detail.bookId }
                    });
                }
            }
            const [updated] = await db.Order.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Order not found');
            }
            res.status(200).json({ message: 'Order updated successfully' });
        } catch (error) {
            console.log('Error updating order', error);
            res.status(500).json({ message: 'Error updating order', error: error.message });
        }
    },
};

module.exports = orderController;