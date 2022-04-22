const mongoose = require('mongoose');


const characteristicsReviewsSchema = new mongoose.Schema(
  {
    _id: String,
    id: String,
    characteristic_id: String,
    review_id: String,
    value: String
  })

const CharacteristicsReviews = mongoose.model('CharacteristicsReviews', characteristicsReviewsSchema);

module.exports = CharacteristicsReviews;

module.exports.getCharacteristicsReviews = function(id) {
  return CharacteristicsReviews.find(id);
}

