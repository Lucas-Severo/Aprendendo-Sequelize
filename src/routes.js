const express = require('express');
const routes = express.Router();

routes.get('/pedido', (req, res) => {
    return res.json({message: 'buscando'});
});

module.exports = routes;