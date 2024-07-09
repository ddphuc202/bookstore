'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Admin, {
        foreignKey: 'adminId',
        as: 'admin',
      });
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING(350),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admins',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    underscored: true,
  });
  return Post;
};