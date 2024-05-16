const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team");

router.get(["/team"], teamController.teamView);

module.exports = router;
