'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.CartItem, {
        foreignKey: 'customerId',
        as: 'cartItems',
      })
      Customer.hasMany(models.Order, {
        foreignKey: 'customerId',
        as: 'orders',
      })
    }
  }
  Customer.init({
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
    address: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true,
  });
  return Customer;
};