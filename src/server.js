const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const sequelize = new Sequelize('basic_crud', process.env.USER_NAME, process.env.PASSWORD, {
    dialect: 'postgres'
})

app.get("/", (req, res) => {
    return res.json({message: "Nada"});
});

app.listen(3000);