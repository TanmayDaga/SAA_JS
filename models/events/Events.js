const path = require("path");
const db = require("../../config/db");
const fs = require("fs");
const logger = require("../../utils/logger");
const { EventTypes } = require("./EventTypes");

const Events = db.ORM.define(
  "Events",
  {
    id: {
      type: db.DataTypes.UUID,
      defaultValue: db.DataTypes.UUIDV4,
      primaryKey: true,
    },
    eventType: {
      type: db.DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: {
          msg: "Please enter Event name",
        },
      },
    },
    startDate: {
      type: db.DataTypes.DATEONLY,
    },
    endDate: {
      type: db.DataTypes.DATEONLY,
    },
    startTime: {
      type: db.DataTypes.TIME,
    },
    endTime: {
      type: db.DataTypes.TIME,
    },
    venue: {
      type: db.DataTypes.STRING,
    },
    description: { type: db.DataTypes.STRING },
    // FIXME: - To allow admin to insert this field.Currently its autogenerated. If value inserted no effect
    // TODO: Allow user to see the directory path and not only media in it
    mediaDirectory: {
      type: db.DataTypes.STRING,
      get() {
        const files = fs.readdirSync(this.getDataValue("mediaDirectory"));
        return files.map((file) =>
          path.join(this.getDataValue("mediaDirectory"), file)
        );
      },
    },
    eventType: {
      type: db.DataTypes.STRING,
      allowNull: false,
      references: {
        model: EventTypes,
        key: "name",
      },
      validate: {
        notNull: {
          msg: "Please select an event type",
        },
      },
    },
  },
  {
    hooks: {
      // Storing images  data in mediaDirectory
      beforeCreate: (instance, options) => {
        instance.mediaDirectory = `/media/events/${instance.name}-${instance.id}`;
        if (!fs.existsSync(path.join(__dirname, instance.mediaDirectory))) {
          fs.mkdirSync(path.join(__dirname, instance.mediaDirectory), {
            recursive: true,
          });
          logger(
            `New directory ${instance.mediaDirectory} created successfully`,
            "success"
          );
        } else {
          logger(`Directory ${instance.mediaDirectory} already exists`, "info");
        }
      },
    },
  }
);

Events.belongsTo(EventTypes, { foreignKey: "eventType", targetKey: "name" });
EventTypes.hasMany(Events, { foreignKey: "eventType", sourceKey: "name" });

module.exports = { Events };