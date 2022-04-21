const mongoose = require("mongoose");





const reviewSchema = new mongoose.Schema(
  {
    _id
626053965040926dad2cffd5
id: String,
product_id: String,
rating: String,
date: ,
summary: ,
body: ,
recommend: ,
reported: ,
reviewer_name: ,
reviewer_email: ,
response: ,
helpfulness: ,
  }

const Review = mongoose.model(, reviewSchema);


module.exports = Review;