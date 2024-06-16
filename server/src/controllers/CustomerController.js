const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');

// Define customer controller object
const CustomerController = {
    // Define controller methods 
    getAllCustomers: (req, res) => {
        // Use the customer model to get all customers from the database
        Customer.getAllCustomers()
            .then(customers => {
                // If the customers are retrieved successfully, send them in the response
                res.status(200).json(customers);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting customers', error: err });
            });
    },

    getCustomerById: (req, res) => {
        // Get the customer ID from the request parameters
        const customerId = req.params.id;

        // Use the customer model to get a specific customer from the database
        Customer.getCustomerById(customerId)
            .then(customer => {
                // If the customer is retrieved successfully, send it in the response
                res.status(200).json(customer);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting customer', error: err });
            });
    },

    createCustomer: async (req, res) => {
        const newCustomerData = req.body;

        try {
            // Check if a customer with the same email already exists
            let customer = await Customer.getCustomerByEmail(newCustomerData.email);
            if (customer) {
                return res.status(400).json({ message: 'Customer with this email already exists' });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            newCustomerData.password = await bcrypt.hash(newCustomerData.password, salt);

            const newCustomerId = await Customer.createCustomer(newCustomerData);

            res.status(201).json({ message: 'Customer created successfully', id: newCustomerId });
        } catch (err) {
            res.status(500).json({ message: 'Error creating customer', error: err });
        }
    },

    updateCustomer: (req, res) => {
        // Get the customer ID from the request parameters
        const customerId = req.params.id;
        // Get the updated customer data from the request body
        const updatedCustomerData = req.body;

        // Use the customer model to update the customer in the database
        Customer.updateCustomer(customerId, updatedCustomerData)
            .then(updateResult => {
                // If the customer was updated successfully, send a success response
                res.status(200).json({ message: 'Customer updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating customer', error: err });
            });

    },

    deleteCustomer: (req, res) => {
        // Get the customer ID from the request parameters
        const customerId = req.params.id;

        // Use the customer model to delete the customer from the database
        Customer.deleteCustomer(customerId)
            .then(deleteResult => {
                // If the customer was deleted successfully, send a success response
                res.status(200).json({ message: 'Customer deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting customer', error: err });
            });
    }
};

// Export the customer controller object
module.exports = CustomerController;
