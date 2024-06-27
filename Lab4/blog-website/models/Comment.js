const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  comment_id: {
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
  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'Comments',
});

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Post.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Comment;
