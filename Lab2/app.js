const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/posts', upload.single('image'), postRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
