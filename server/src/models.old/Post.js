const pool = require('../config/database');

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static queryDatabase(query, params) {
        return new Promise((resolve, reject) => {
            pool.query(query, params, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getAllPosts() {
        return this.queryDatabase('SELECT * FROM posts WHERE deleted_at IS NULL')
    };

    static getPostById(id) {
        return this.queryDatabase('SELECT * FROM posts WHERE id = ? AND deleted_at IS NULL', id);
    }

    static createPost(newPostData) {
        return this.queryDatabase('INSERT INTO posts SET ?', newPostData);
    }

    static updatePost(id, post) {
        return this.queryDatabase('UPDATE posts SET ? WHERE id = ?', [post, id]);
    }

    static deletePost(id) {
        return this.queryDatabase('UPDATE posts SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?', id);
    }
}

module.exports = Post;
