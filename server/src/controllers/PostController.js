const db = require('../models');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const postController = {
    // Get all posts
    getAll: async (req, res) => {
        try {
            let { page = 1, limit = 6 } = req.query;
            let offset = (page - 1) * limit;
            if (offset < 0) {
                offset = 0;
            }

            const totalPosts = await db.Post.count();
            const totalPages = Math.ceil(totalPosts / limit);

            const posts = await db.Post.findAll({
                attributes: {
                    include: [
                        [db.Sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', image)`), 'imagePath'],
                    ]
                },
                order: [['updatedAt', 'DESC']],
                limit: parseInt(limit),
                offset: parseInt(offset),
            });

            res.status(200).json({ posts, totalPages });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving posts', error });
        }
    },

    // Get post by ID
    getById: async (req, res) => {
        try {
            const post = await db.Post.findByPk(req.params.id, {
                attributes: {
                    include: [
                        [db.Sequelize.literal(`CONCAT('${process.env.IMAGE_PATH}', image)`), 'imagePath']
                    ]
                }
            });
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving post', error });
        }
    },

    // Create a new post
    create: async (req, res) => {
        try {
            const postData = req.body;
            if (req.file) {
                postData.image = req.file.filename;
            }
            const newPost = await db.Post.create(postData);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json({ message: 'Error creating post', error });
        }
    },

    // Update a post
    update: async (req, res) => {
        try {
            const postData = req.body;
            if (req.file) {
                const currentImage = await db.Post.findByPk(req.params.id, {
                    attributes: ['image']
                });
                const currentImagePath = path.join(__dirname, '../public/images/' + currentImage.image);
                fs.unlink(currentImagePath, (err) => {
                    if (err) console.log('Error deleting image: ', currentImagePath);
                });
                postData.image = req.file.filename;
            }
            const [updated] = await db.Post.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                return res.status(404).json({ message: 'Error updating post' });
            }
            res.status(200).json({ message: 'Post updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating post', error });
        }
    },

    // Delete a post
    delete: async (req, res) => {
        try {
            const currentImage = await db.Post.findByPk(req.params.id, {
                attributes: ['image']
            });
            const currentImagePath = path.join(__dirname, '../public/images/' + currentImage.image);
            fs.unlink(currentImagePath, (err) => {
                if (err) console.log('Error deleting image', currentImagePath);
            });
            const deleted = await db.Post.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                return res.status(404).json({ message: 'Post not found' }); // Ensure to return early
            }
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting post', error });
        }
    },
};

module.exports = postController;