const Sequelize = require('sequelize');
const connection = new Sequelize('basic_crud', process.env.USER_NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;