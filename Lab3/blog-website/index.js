const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
