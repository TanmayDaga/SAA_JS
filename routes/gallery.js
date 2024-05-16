const {galleryView} = require("../controllers/gallery");
const router = require('express').Router()

router.get('/gallery',galleryView)
module.exports = router