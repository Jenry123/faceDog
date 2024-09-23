const express = require('express');
const bodyParser = require('body-parser');
const petRoutes = require('./routes/Pet.routes.js');
const categoryRoutes=require('./routes/Category.routes.js')
const sexRoutes=require('./routes/sex.routes.js')
const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/pet', petRoutes);
app.use('/category',categoryRoutes)
app.use('/sex',sexRoutes)

module.exports = app;
