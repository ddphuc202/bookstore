const Post = require('../models/Post');

const PostController = {
    getAllPosts: (req, res) => {
        Post.getAllPosts()
            .then(posts => {
                res.status(200).json(posts);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting posts', error: err });
            });
    },

    getPostById: (req, res) => {
        const postId = req.params.id;

        Post.getPostById(postId)
            .then(post => {
                res.status(200).json(post);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting post', error: err });
            });
    },

    createPost: (req, res) => {
        const newPostData = req.body;
        const imageName = req.file ? req.file.filename : null; // prevent TypeError if no image is uploaded

        console.log(imageName);
        newPostData.image_name = imageName;

        Post.createPost(newPostData)
            .then(newPostId => {
                res.status(201).json({ message: 'Post created successfully', id: newPostId });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error creating post', error: err });
            });
    },

    updatePost: (req, res) => {
        const postId = req.params.id;
        const updatedPostData = req.body;
        const imageName = req.file ? req.file.filename : null;

        updatedPostData.image_name = imageName;

        Post.updatePost(postId, updatedPostData)
            .then(updateResult => {
                res.status(200).json({ message: 'Post updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error updating post', error: err });
            });

    },

    deletePost: (req, res) => {
        const postId = req.params.id;

        Post.deletePost(postId)
            .then(deleteResult => {
                res.status(200).json({ message: 'Post deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error deleting post', error: err });
            });
    }
};

module.exports = PostController;
