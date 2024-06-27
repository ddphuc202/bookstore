const db = require('../models');

const adminController = {
    // Get all admins
    getAll: async (req, res) => {
        try {
            const admins = await db.Admin.findAll({
                where: {
                    role: {
                        [db.Sequelize.Op.not]: 'super'
                    }
                }
            });
            res.status(200).json(admins);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving admins', error: error.message });
        }
    },

    // Get admin by ID
    getById: async (req, res) => {
        try {
            const admin = await db.Admin.findByPk(req.params.id);
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
            res.status(200).json(admin);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving admin', error: error.message });
        }
    },

    // Create new admin
    create: async (req, res) => {
        try {
            const admin = await db.Admin.create(req.body);
            res.status(201).json(admin);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error creating admin', error: error.message });
        }
    },

    // Update admin
    update: async (req, res) => {
        try {
            const admin = await db.Admin.findByPk(req.params.id);
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
            await admin.update(req.body);
            res.status(200).json(admin);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error updating admin', error: error.message });
        }
    },

    // Statistic
    statistic: async (req, res) => {
        try {
            const { month, year } = req.query;
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11

            if (!month || !year || month < 1 || month > 12 || year < 2024 || year > currentYear || (year == currentYear && month > currentMonth)) {
                return res.status(400).json({ message: 'Invalid month or year' });
            }

            const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
            const endDate = new Date(year, month, 0, 23, 59, 59, 999);

            // Sales by month
            const salesByMonth = await db.Order.sum('total', {
                where: {
                    status: 'completed',
                    createdAt: {
                        [db.Sequelize.Op.between]: [startDate, endDate]
                    }
                }
            });

            // Total sales
            const totalSales = await db.Order.sum('total', {
                where: {
                    status: 'completed'
                }
            });

            res.status(200).json({
                salesByMonth: salesByMonth || 0,
                totalSales: totalSales || 0
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error calculating statistics', error: error.message });
        }
    }
};

module.exports = adminController;