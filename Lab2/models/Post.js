const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String, required: true },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
