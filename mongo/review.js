const mongoose = require("mongoose");
const db = require('./index.js');

const reviewSchema = new mongoose.Schema(
  {
 _id: String,
id: String,
product_id: String,
rating: String,
date: String,
summary: String,
body: String,
recommend: Boolean,
reported: Boolean,
reviewer_name: String,
reviewer_email: String,
response: String,
helpfulness: Number,
  })

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

module.exports.getAllReviews = function(id) {
  return Review.find(id);
}

module.exports.createReview = function(obj) {
  return Review.create({body: obj.body});
}

