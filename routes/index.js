const router = require("express").Router();

router.use("/", require("./home"));
router.use("/", require("./team"));
router.use("/", require("./gallery"));
router.use("/", require("./events"));

module.exports = router;
