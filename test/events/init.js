const logger = require("../../utils/logger");
const { EventTypes } = require("../../models/events/EventTypes");
const { Events } = require("../../models/events/Events");

async function init() {
  try {
    // Create dummy EventTypes
    const eventType1 = await EventTypes.create({
      name: "Conference",
    });

    const eventType2 = await EventTypes.create({
      name: "Workshop",
    });

    const eventType3 = await EventTypes.create({
      name: "Meetup",
    });

    // Create dummy Events
    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name:"Dashak",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType1.id,
    });

    await Events.create({
      startDate: "2024-07-15",
      endDate: "2024-07-15",
      name:"Alumni Day",
      startTime: "10:00:00",
      endTime: "15:00:00",
      venue: "Workshop Room B",
      description: "Hands-on workshop on AI",
      eventTypeId: eventType2.id,
    });

    await Events.create({
      startDate: "2024-08-20",
      endDate: "2024-08-20",
      name:"Scribble Day",
      startTime: "18:00:00",
      endTime: "21:00:00",
      venue: "Community Center",
      description: "Local developers meetup",
      eventTypeId: eventType3.id,
    });

    logger("Dummy data created successfully", "success");
  } catch (error) {
    logger(`${error}`, "error");
  }
}

module.exports = { init };
