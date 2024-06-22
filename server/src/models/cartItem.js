'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Customer, {
        foreignKey: 'customerId',
        as: 'customer',
      })
      Cart.belongsTo(models.Book, {
        foreignKey: 'bookId',
        as: 'book',
      })
    }
  }
  Cart.init({
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'cart_items',
    underscored: true,
  });
  return Cart;
};