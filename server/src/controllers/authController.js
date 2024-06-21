const db = require('../models');
const bcrypt = require('bcryptjs');

const authController = {
    // Login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let user = await db.Admin.findOne({ where: { email: email } })
            let userType

            if (user) {
                userType = user.role;
            } else {
                user = await db.Customer.findOne({ where: { email: email } })
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

            req.session.userEmail = user.email;
            req.session.userType = userType;

            res.status(200).json({ message: 'Logged in successfully', userType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error logging in', error });
        }
    }
}

module.exports = authController;