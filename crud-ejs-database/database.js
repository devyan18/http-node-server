const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("notas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
