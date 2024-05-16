async function init() {
  require("./home/init").init();
  require("./team/init").init();
}

module.exports = { init };
