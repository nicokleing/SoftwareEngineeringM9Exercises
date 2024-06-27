const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Post = sequelize.define('Post', {
  post_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'Posts',
});

User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Post;
