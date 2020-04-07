const Sequelize = require('sequelize');
const connection = require('./connection');

const Pedido = connection.define('Pedido', {
    title: {
        type: Sequelize.STRING
    },
    price: { 
        type: Sequelize.DECIMAL 
    },
    table: {
        type: Sequelize.INTEGER
    }
})

Pedido.sync({force: true});

module.exports = Pedido;
