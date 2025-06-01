    const express = require("express");
    const router = express.Router({ mergeParams: true });
    const { isLoggedin, isOwner } = require("../middleware.js");
    const controllers = require("../comtrollers/listings.js");
    const multer = require("multer");
    const { storage } = require("../cloudConfig.js");
    const upload = multer({ storage });


    // Index Route
    router.get("/", controllers.index);

    // New Route
    router.get("/new", isLoggedin, controllers.renderNewForm);

    // Show Route
    router.get("/:id", controllers.showDetails);

    // Create new listings

    router.post("/", isLoggedin, upload.single("image"), controllers.createListing);

    //Edit Route
    router.get("/:id/edit", isLoggedin, isOwner, controllers.editListing);

    //Update Route
    router.put("/:id", isLoggedin,upload.single("image"), controllers.updateListing);

    //Delete Route
    router.delete("/:id", isLoggedin, isOwner, controllers.deleteListing);

    module.exports = router;
