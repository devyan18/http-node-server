const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_21648', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize }