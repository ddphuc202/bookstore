const Post = require('../models/Post');

// Define post controller object
const PostController = {
    // Define your controller methods here
    getAllPosts: (req, res) => {
        // Use the post model to get all posts from the database
        Post.getAllPosts()
            .then(posts => {
                // If the posts are retrieved successfully, send them in the response
                res.status(200).json(posts);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting posts', error: err });
            });
    },

    getPostById: (req, res) => {
        // Get the post ID from the request parameters
        const postId = req.params.id;

        // Use the post model to get a specific post from the database
        Post.getPostById(postId)
            .then(post => {
                // If the post is retrieved successfully, send it in the response
                res.status(200).json(post);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting post', error: err });
            });
    },

    createPost: (req, res) => {
        // Get the post data from the request body
        const newPostData = req.body;

        // Use the post model to create a new post in the database
        Post.createPost(newPostData)
            .then(newPostId => {
                // If the post was created successfully, send a success response
                res.status(201).json({ message: 'Post created successfully', id: newPostId });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error creating post', error: err });
            });
    },

    updatePost: (req, res) => {
        // Get the post ID from the request parameters
        const postId = req.params.id;
        // Get the updated post data from the request body
        const updatedPostData = req.body;

        // Use the post model to update the post in the database
        Post.updatePost(postId, updatedPostData)
            .then(updateResult => {
                // If the post was updated successfully, send a success response
                res.status(200).json({ message: 'Post updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating post', error: err });
            });

    },

    deletePost: (req, res) => {
        // Get the post ID from the request parameters
        const postId = req.params.id;

        // Use the post model to delete the post from the database
        Post.deletePost(postId)
            .then(deleteResult => {
                // If the post was deleted successfully, send a success response
                res.status(200).json({ message: 'Post deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting post', error: err });
            });
    }
};

// Export the post controller object
module.exports = PostController;
