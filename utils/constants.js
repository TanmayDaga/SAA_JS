const HOME_PAGE_RENDER_INPUTS = {
  NavLinks: "NavLinks",
  CarouselMedia: "CarouselMedia",
};
const HOME_PAGE_NAVLINKS = {
  home: ["Home", "/home"],
  activities: [
    "Activities",
    [
      ["Orientation", "/orientation"],
      ["Student Activities", "/student activities"],
    ],
  ],
  about: ["About", "/about"],
  contact: ["Contact", "/contact"],
};

const TEAM_PAGE_RENDER_INPUTS = {
  TeamMembers: "TeamMembers",
};

const TEAM_PAGE_POSITION_TYPES = {
  1: "President",
  2: "Vice President",
  3: "Overall Coordinators",
  4: "Team Coordinators",
  5: "Team Members",
};

const TEAM_PAGE_TEAM_TYPES = {
  1: "Super",
  2: "Design",
  3: "Content",
  4: "Tech and Communication",
  5: "Events",
};

module.exports = {
  HOME_PAGE_RENDER_INPUTS,
  HOME_PAGE_NAVLINKS,
  TEAM_PAGE_RENDER_INPUTS,
  TEAM_PAGE_POSITION_TYPES,
  TEAM_PAGE_TEAM_TYPES,
};
