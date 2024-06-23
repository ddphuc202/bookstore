const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
    // Login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let user = await db.Admin.findOne({ where: { email: email } })
            let userId, userName, userType;
            if (user) {
                userId = user.id;
                userName = user.name;
                userType = user.role;
            } else {
                user = await db.Customer.findOne({ where: { email: email } })
                userId = user.id;
                userName = user.name;
                userType = 'customer';
            }

            // If user not found in both tables
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId, userName, userType }, 'secret', { expiresIn: '1h' });

            res.status(200).json({ message: 'Logged in successfully', token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error logging in', error });
        }
    },

    // Logout
    // logout: async (req, res) => {
    //     try {
    //         req.session.destroy();
    //         res.status(200).json({ message: 'Logged out successfully' });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: 'Error logging out', error });
    //     }
    // }
}

module.exports = authController;