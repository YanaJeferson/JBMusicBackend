const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const indexRoutes = require('./routes/index');
const holaRoutes = require('./routes/hola');

app.use('/', indexRoutes);
app.use('/helloWorld', holaRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
