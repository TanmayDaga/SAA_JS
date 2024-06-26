const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

const ORM = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../data.sqlite"),
});

const db = { ORM, DataTypes };

module.exports = db;
