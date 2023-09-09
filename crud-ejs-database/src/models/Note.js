const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const NoteModel = sequelize.define("notas", {
  author: DataTypes.STRING,
  content: DataTypes.TEXT,
});

module.exports = { NoteModel };
