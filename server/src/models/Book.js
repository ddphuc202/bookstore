'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Book.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
      });
      models.Book.hasMany(models.BookImage, {
        foreignKey: 'bookId',
        as: 'bookImages',
      });
      models.Book.hasMany(models.CartItem, {
        foreignKey: 'bookId',
        as: 'cartItems',
      });
      models.Book.belongsToMany(models.Order, {
        through: models.OrderDetail,
        foreignKey: 'bookId',
        otherKey: 'orderId',
      });
      models.Book.hasMany(models.OrderDetail, {
        foreignKey: 'bookId',
        as: 'orderDetails',
      });
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING(350),
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.TEXT,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
    underscored: true,
    paranoid: true,
  });
  return Book;
};