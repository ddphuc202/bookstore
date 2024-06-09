const pool = require('../config/database');

class Customer {
    constructor(name) {
        this.name = name;
    }

    static getAllCustomers() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM customers WHERE deleted_at IS NULL', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getCustomerById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM customers WHERE id = ? AND deleted_at IS NULL', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }

    static createCustomer(newCategory) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO customers SET ?', newCategory, (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results.insertId);
            });
        });
    }

    static updateCustomer(id, updatedCategory) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE customers SET ? WHERE id = ?', [updatedCategory, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static deleteCustomer(id) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE customers SET deleted_at = NOW() WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }
}

module.exports = Customer;