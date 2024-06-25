const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
    // Login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let admin = await db.Admin.findOne({ where: { email: email } });
            let isValid, userId, userName, userRole;
            if (admin) {
                isValid = await bcrypt.compare(password, admin.password);
                userId = admin.id;
                userName = admin.name;
                userRole = admin.role;
            } else {
                customer = await db.Customer.findOne({ where: { email: email } });
                isValid = await bcrypt.compare(password, customer.password);
                userId = customer.id;
                userName = customer.name;
                userRole = 'customer';
            }

            // If user not found in both tables
            if (!admin && !customer) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!isValid) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: userId, userName: userName, userRole: userRole }, process.env.JWT_SECRET, { expiresIn: '3h' });

            res.status(200).json({ message: 'Logged in successfully', token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error logging in', error });
        }
    },
};

module.exports = authController;