const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.OPENWEATHER_API_KEY;

exports.getWeatherByCity = async (req, res) => {
  const city = req.params.city || req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
};
