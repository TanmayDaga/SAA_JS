const { EventTypes } = require("../../models/events/EventTypes");
const { Events } = require("../../models/events/Events");
const logger = require("../../utils/logger");
async function init() {
  const dummyEventTypes = [
    { name: "Conference" },
    { name: "Workshop" },
    { name: "Seminar" },
  ];

  const dummyEvents = [
    {
      eventType: "Conference",
      startDate: "2022-05-01",
      endDate: "2022-05-03",
      startTime: "09:00",
      endTime: "17:00",
      venue: "Conference Center",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      eventType: "Workshop",
      startDate: "2022-06-15",
      endDate: "2022-06-16",
      startTime: "13:00",
      endTime: "16:00",
      venue: "Workshop Venue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      eventType: "Seminar",
      startDate: "2022-07-20",
      endDate: "2022-07-21",
      startTime: "10:00",
      endTime: "15:00",
      venue: "Seminar Hall",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      eventType: "Conference",
      startDate: "2022-08-10",
      endDate: "2022-08-10",
      startTime: "18:00",
      endTime: "22:00",
      venue: "Social Club",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  try {
    await EventTypes.bulkCreate(dummyEventTypes);
    logger("Dummy data inserted successfully for EventTypes", "success");
  } catch (error) {
    logger(error, "error");
  }

  try {
    await Events.bulkCreate(dummyEvents);
    logger(" Dummy data inserted successfully for Events", "success");
  } catch (error) {
    logger(error, "error");
  }
}
module.exports = { init };
