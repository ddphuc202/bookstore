const { where } = require('sequelize');
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
};

module.exports = adminController;