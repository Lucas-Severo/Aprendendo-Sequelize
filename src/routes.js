const express = require('express');
const routes = express.Router();

const PedidoController = require('./controllers/PedidoController');

routes.get('/pedidos', PedidoController.index);
routes.post('/pedidos', PedidoController.create);
routes.put('/pedidos/:id', PedidoController.update);
routes.delete('/pedidos/:id', PedidoController.destroy);

module.exports = routes;