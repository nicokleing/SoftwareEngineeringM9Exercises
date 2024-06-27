const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), postController.createPost);
router.post('/:postId/like', postController.likePost);
router.post('/:postId/comment', postController.commentPost);

module.exports = router;
