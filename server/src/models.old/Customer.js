const pool = require('../config/database');

class Customer {
    constructor(name) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.address = address;
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

    static getAllCustomers() {
        return this.queryDatabase('SELECT * FROM customers ORDER BY updated_at DESC');
    }

    static getCustomerByEmail(email) {
        return this.queryDatabase('SELECT * FROM customers WHERE email = ?', [email]);
    }

    static getCustomerById(id) {
        return this.queryDatabase('SELECT * FROM customers WHERE id = ?', id);
    }

    static createCustomer(newCustomerData) {
        return this.queryDatabase('INSERT INTO customers SET ?', newCustomerData);
    }

    static updateCustomer(id, updatedCustomerData) {
        return this.queryDatabase('UPDATE customers SET ? WHERE id = ?', [updatedCustomerData, id]);
    }

    static deleteCustomer(id) {
        return this.queryDatabase('UPDATE customers SET deleted_at = NOW() WHERE id = ?', id);
    }
}

module.exports = Customer;