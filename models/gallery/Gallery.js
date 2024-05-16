const db = require("../../config/db");

const Gallery = db.ORM.define("Gallery", {
  id: {
    type: db.DataTypes.UUID,
    defaultValue: db.DataTypes.UUIDV4,
    primaryKey: true,
  },
  event: {
    type: db.DataTypes.STRING,
    allowNuLL: false,
  },
  eventDate: {
    type: db.DataTypes.DATE,
    allowNull: true,
  },
  mediaPaths: {
    type: db.DataTypes.STRING,
    allowNull: true,
    set(value) {
      this.setDataValue("mediaPaths", value ? JSON.stringify(value) : null);
    },
    get() {
        const value = this.getDataValue('mediaPaths');
        return value ? JSON.parse(value) : null;
      },
  },
});

module.exports = { Gallery };
