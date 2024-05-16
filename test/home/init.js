const { CarouselMedia } = require("../../models/home/Carousel");

// Dummy data for carousel media
const dummyCarouselMedia = [
  { path: "/media/logo.png" },
  { path: "/media/logo.png" },
  { path: "/media/logo.png" },

];


async function init() {
  try {
    await CarouselMedia.bulkCreate(dummyCarouselMedia); // Insert dummy data
    console.log("Dummy data inserted successfully");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
}

module.exports = {
  init,
};
