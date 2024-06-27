const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.post('/likes', likeController.createLike);

module.exports = router;
