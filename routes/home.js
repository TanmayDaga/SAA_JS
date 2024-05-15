const express = require("express");
const homeController = require("../controllers/home");

const router = express.Router();
router.get(["/","/home"], homeController.homeView);

module.exports = router;
