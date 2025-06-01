const express = require("express");
const router = express.Router({mergeParams:true});
const {isLoggedin,isReviewAuthor,validateReview} = require("../middleware.js");
const controllers = require("../comtrollers/reviews.js");

// Review Post Route

router.post("", isLoggedin, validateReview,controllers.reviewPost);

// Delete route for review

router.delete("/:reviewId", isLoggedin,isReviewAuthor,controllers.reviewDelete);


module.exports = router