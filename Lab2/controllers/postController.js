const Post = require('../models/Post');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.createPost = async (req, res) => {
  try {
    // Temporalmente asignar un user.id para pruebas
    req.user = { id: '60d0fe4f5311236168a109ca' }; // Reemplaza esto con un ID de usuario válido de tu base de datos

    const { title, description } = req.body;
    const image = req.file ? req.file.path : '';
    const newPost = new Post({ title, description, image, user: req.user.id });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    // Temporalmente asignar un user.id para pruebas
    req.user = { id: '60d0fe4f5311236168a109ca' }; // Reemplaza esto con un ID de usuario válido de tu base de datos

    if (!post.likes.includes(req.user.id)) {
      post.likes.push(req.user.id);
      await post.save();
    }
    res.status(200).json({ message: 'Post liked' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.commentPost = async (req, res) => {
  try {
    const { comment } = req.body;
    const post = await Post.findById(req.params.postId);
    // Temporalmente asignar un user.id para pruebas
    req.user = { id: '60d0fe4f5311236168a109ca' }; // Reemplaza esto con un ID de usuario válido de tu base de datos

    post.comments.push({ user: req.user.id, comment });
    await post.save();
    res.status(200).json({ message: 'Comment added' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
