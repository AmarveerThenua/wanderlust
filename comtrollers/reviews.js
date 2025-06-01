const { required } = require("joi");
const Review = require("../models/review");
const Listing = require("../models/listing")


module.exports.reviewPost = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  const newReview = new Review(req.body.review);
  listing.reviews.push(newReview);
  newReview.author = req.user._id
  await newReview.save();
  await listing.save();
  req.flash("success","One Review Created");
  res.redirect(`/listings/${id}`);
}

module.exports.reviewDelete = async (req, res) => {
  const { id, reviewId } = req.params;
  console.log(id)
  console.log(reviewId)
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success","One Review Deleted");
  res.redirect(`/listings/${id}`);
}