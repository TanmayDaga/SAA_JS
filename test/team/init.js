const { TeamMembers } = require("../../models/team/Team");

const dummyTeamMembers = [
  {
    name: "John Doe",
    position: 1,
    teamType: 1,
    phoneNumber: "1234567890",
    email: "john@example.com",
  },
  {
    name: "Jane Smith",
    position: 2,
    teamType: 2,
    phoneNumber: "9876543210",
    email: "jane@example.com",
  },
  {
    name: "Alice Johnson",
    position: 3,
    teamType: 1,
    phoneNumber: "5555555555",
    email: "alice@example.com",
  },
  {
    name: "Bob Brown",
    position: 1,
    teamType: 3,
    phoneNumber: "7777777777",
    email: "bob@example.com",
  },
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
