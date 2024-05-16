const CONSTANTS = require("../utils/constants");
const { Gallery } = require("../models/gallery/Gallery");

module.exports = {
  galleryView: async (req, res, next) => {
    res.render("gallery", {
      [CONSTANTS.GALLERY_PAGE_RENDER_INPUTS.Gallery]: await Gallery.findAll({
        attributes: {
          exclude:['createdAt','updatedAt']
        }
      }),
    });
    next();
  }
};
