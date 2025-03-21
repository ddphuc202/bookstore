'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Book, {
        through: models.OrderDetail,
        foreignKey: 'orderId',
        otherKey: 'bookId',
      });
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerId',
        as: 'customer',
      });
      Order.hasMany(models.OrderDetail,
        {
          foreignKey: 'orderId',
          as: 'orderDetails',
        }
      );
    }
  }
  Order.init({
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trackingNumber: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM('pending', 'processing', 'delivering', 'completed', 'cancelled'),
      allowNull: false,
      defaultValue: 'pending'
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    underscored: true,
  });
  return Order;
};