const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const routes = require('./routes');
require('dotenv').config();


const Pedido = require('./models/Pedido');

app.use(routes);

app.listen(3000);