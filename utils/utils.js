const constants = require("./constants");

const teamPagePositionTypesLength = Object.keys(
  constants.TEAM_PAGE_POSITION_TYPES
).length;

const teamPageTeamTypesLength = Object.keys(
  constants.TEAM_PAGE_TEAM_TYPES
).length;

const getTeamPagePositionType = (num) =>
  constants.TEAM_PAGE_POSITION_TYPES[num];

const getTeamPageTeamType = (num) => constants.TEAM_PAGE_TEAM_TYPES[num];

module.exports = {
  teamPagePositionTypesLength,
  teamPageTeamTypesLength,
  getTeamPagePositionType,
  getTeamPageTeamType,
};
