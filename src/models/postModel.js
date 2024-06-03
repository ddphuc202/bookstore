const db = require('../common/connectDB');

// Import database

class Post {
    // Post has (title, content, post_category)
    constructor(title, content, post_category) {
        this.title = title;
        this.content = content;
        this.post_category = post_category;
    }

    // Create a new post
    static create(title, content, post_category) {
        const newPost = new Post(title, content, post_category);
        // Add code to save the new post to the database or storage
        return newPost;
    }

    // Get all posts with db above
    static getAll(result) {
        db.query('SELECT * FROM posts', (err, res) => {
            if (err) {
                console.error('Error getting all posts:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }

    // Get a post by ID
    static getById(id, result) {
        db.query('SELECT * FROM posts WHERE id = ?', [id], (err, res) => {
            if (err) {
                console.error('Error getting post by ID:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }

    // Update a post by ID
    static update(id, post, result) {
        db.query('UPDATE posts SET title = ?, content = ?, post_category = ? WHERE id = ?', [post.title, post.content, post.post_category, id], (err, res) => {
            if (err) {
                console.error('Error updating post:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }

    // Soft delete a post by ID
    static delete(id, result) {
        db.query('DELETE FROM posts WHERE id = ?', [id], (err, res) => {
            if (err) {
                console.error('Error deleting post:', err);
                result(null, err);
                return;
            }
            result(null, res);
        });
    }
}

module.exports = Post;
