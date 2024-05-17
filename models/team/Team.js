const db = require("../../config/db");
const {
  teamPagePositionTypesLength,
  teamPageTeamTypesLength,
} = require("../../utils/utils");

const TeamMembers = db.ORM.define("Team", {
  id: {
    type: db.DataTypes.UUID,
    default: db.DataTypes.UUIDV4,
    primaryKey: true,
  },
  imagePath: {
    type: db.DataTypes.TEXT,
    defaultValue: "/media/profilePlaceHolder.png",
  },
  name: {
    type: db.DataTypes.STRING,
    allowNuLL: false,
  },
  position: {
    type: db.DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: teamPagePositionTypesLength,
    },
  },
  teamType: {
    type: db.DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: teamPageTeamTypesLength,
    },
  },
  phoneNumber: {
    type: db.DataTypes.STRING,
  },
  email: {
    type: db.DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  instagramLink: {
    type: db.DataTypes.STRING,
  },
  linkedinLink: {
    type: db.DataTypes.STRING
  }
});

module.exports = {
  TeamMembers,
};
