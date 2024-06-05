const pool = require('../config/database');

class Genre {
    constructor(name) {
        this.name = name;
    }

    static getAllGenres() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM genres WHERE deleted_at IS NULL', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getGenreById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM genres WHERE id = ? AND deleted_at IS NULL', id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createGenre(genre) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO genres SET ?', genre, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updateGenre(id, genre) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE genres SET ? WHERE id = ?', [genre, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }

    static deleteGenre(id) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE genres SET deleted_at = NOW() WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.changedRows);
            });
        });
    }
}

module.exports = Genre;
