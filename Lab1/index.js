const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML de la calculadora
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'calculator.html'));
});

app.use('/calculator', calculatorRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
