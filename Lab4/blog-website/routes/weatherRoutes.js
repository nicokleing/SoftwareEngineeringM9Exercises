// routes/weatherRoutes.js
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather', weatherController.getWeatherByCity); // using query parameter
router.get('/weather/:city', weatherController.getWeatherByCity); // using path parameter

module.exports = router;
