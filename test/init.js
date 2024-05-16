async function init() {
  require("./home/init").init();
  require("./team/init").init();
  require("./gallery/init").init();
}

module.exports = { init };
