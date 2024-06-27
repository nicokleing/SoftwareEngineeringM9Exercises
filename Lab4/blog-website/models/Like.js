const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

const Like = sequelize.define('Like', {
  like_id: {
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
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'post_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'Likes',
});

User.hasMany(Like, { foreignKey: 'user_id' });
Like.belongsTo(User, { foreignKey: 'user_id' });

Post.hasMany(Like, { foreignKey: 'post_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Like;
