'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Admin.hasMany(models.Post, {
        foreignKey: 'adminId',
        as: 'posts',
      });
      Admin.hasMany(models.Book, {
        foreignKey: 'adminId',
        as: 'books',
      });
    }
  }
  Admin.init({
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
    role: {
      type: DataTypes.ENUM('super', 'admin'),
      defaultValue: 'admin',
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: 'admins',
    underscored: true,
  });
  return Admin;
};