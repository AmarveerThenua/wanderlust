const joi = require("joi")
const Review = require("./models/review")

module.exports.reviewSchema =joi.object({
    review : joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment: joi.string().required(),
    }).required()
});