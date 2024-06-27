const Like = require('../models/Like');

exports.createLike = async (req, res) => {
  try {
    const like = await Like.create(req.body);
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
