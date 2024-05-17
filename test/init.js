async function init() {
  await require("./home/init").init();
  await require("./team/init").init();
  await require("./gallery/init").init();
  await require("./events/init").init();
}

module.exports = { init };
