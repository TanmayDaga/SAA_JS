const db = require("../../config/db");

const EventTypes = db.ORM.define("EventTypes", {
  id: {
    type: db.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: db.DataTypes.STRING,
    allowNull: false,
    validate: {
      isNull: {
        msg: "Please enter EventType name",
      },
    },
  },
});

module.exports = { EventTypes };
