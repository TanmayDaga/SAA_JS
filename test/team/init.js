const { TeamMembers } = require("../../models/team/Team");

const dummyTeamMembers = [
  {
  
    imagePath: "/media/profilePlaceHolder.png",
    name: "John Doe",
    position: 1,
    teamType: 1,
    phoneNumber: "1234567890",
    email: "john@example.com",
    instagramLink: "https://www.instagram.com/johndoe",
    linkedinLink: "https://www.linkedin.com/in/johndoe"
  },
  {
    imagePath: "/media/profilePlaceHolder.png",
    name: "Jane Smith",
    position: 2,
    teamType: 2,
    phoneNumber: "9876543210",
    email: "jane@example.com",
    instagramLink: "https://www.instagram.com/janesmith",
    linkedinLink: "https://www.linkedin.com/in/janesmith"
  },
  {
    imagePath: "/media/profilePlaceHolder.png",
    name: "Alice Johnson",
    position: 3,
    teamType: 1,
    phoneNumber: "5555555555",
    email: "alice@example.com",
    instagramLink: "https://www.instagram.com/alicejohnson",
    linkedinLink: "https://www.linkedin.com/in/alicejohnson"
  },
  {
    imagePath: "/media/profilePlaceHolder.png",
    name: "Bob Brown",
    position: 1,
    teamType: 3,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown"
  }
];


async function init() {
  try {
    await TeamMembers.bulkCreate(dummyTeamMembers);
    console.log("Dummy data inserted successfully");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
}

module.exports = {
  init,
};
