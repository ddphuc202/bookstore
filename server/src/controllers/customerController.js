const db = require('../models');
const bcrypt = require('bcryptjs');

const customerController = {
    // Get all customers
    getAll: async (req, res) => {
        try {
            let { page = 1, limit = 10 } = req.query;
            let offset = (page - 1) * limit;
            if (offset < 0) {
                offset = 0;
            }
            const totalCustomers = await db.Customer.count();
            const totalPages = Math.ceil(totalCustomers / limit);
            const customers = await db.Customer.findAll({
                order: [['updatedAt', 'DESC']],
            });
            res.status(200).json({ customers, totalPages });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving customers', error });
        }
    },

    // Get customer by ID
    getById: async (req, res) => {
        try {
            const customer = await db.Customer.findByPk(req.params.id);
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving customer', error });
        }
    },

    // Create a new customer
    create: async (req, res) => {
        try {
            const customerData = req.body;
            // Check if email already exists
            const existingCustomer = await db.Customer.findOne({ where: { email: customerData.email } });
            if (existingCustomer) {
                return res.status(400).json({ message: 'Email already used' });
            }
            const existingAdmin = await db.Admin.findOne({ where: { email: customerData.email } });
            if (existingAdmin) {
                return res.status(400).json({ message: 'Email already used' });
            }
            // Hash password
            customerData.password = await bcrypt.hash(customerData.password, 12);
            // Create customer
            const newCustomer = await db.Customer.create(customerData);
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(500).json({ message: 'Error creating customer', error });
        }
    },

    // Update a customer
    update: async (req, res) => {
        try {
            const [updated] = await db.Customer.update(req.body, { // array destructuring
                where: { id: req.params.id }
            });
            if (!updated) {
                throw new Error('Customer not found');
            }
            res.status(200).json({ message: 'Customer updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating customer', error });
        }
    },

    // Delete a customer
    delete: async (req, res) => {
        try {
            const deleted = await db.Customer.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                throw new Error('Customer not found');
            }
            res.status(200).json({ message: 'Customer deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting customer', error });
        }
    },
};

module.exports = customerController;