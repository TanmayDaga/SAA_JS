const { Gallery } = require("../../models/gallery/Gallery"); // Adjust the path to your actual model file
const logger = require("../../utils/logger");

async function init() {
  const dummyGalleryItems = [
    {
      event: "Event 1",
      eventDate: new Date("2023-01-01"),
      mediaPaths: ["/media/logo.png", "/media/logo.png"],
    },
    {
      event: "Event 2",
      eventDate: new Date("2023-02-01"),
      mediaPaths: ["/media/logo.png", "/media/logo.png"],
    },
    {
      event: "Event 3",
      eventDate: new Date("2023-03-01"),
      mediaPaths: ["/media/logo.png", "/media/logo.png"],
    },
    {
      event: "Event 4",
      eventDate: new Date("2023-04-01"),
      mediaPaths: ["/media/logo.png", "/media/logo.png"],
    },
    {
      event: "Event 5",
      eventDate: new Date("2023-05-01"),
      mediaPaths: ["/media/logo.png", "/media/logo.png"],
    },
  ];

  try {
    await Gallery.bulkCreate(dummyGalleryItems);
    logger("Dummy data inserted successfully", "success");
  } catch (error) {
    logger("Error inserting dummy data:", "error");
  }
}

module.exports = { init };
