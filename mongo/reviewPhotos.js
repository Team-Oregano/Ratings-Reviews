const mongoose = require('mongoose');


const reviewPhotosSchema = new mongoose.Schema(
  {
    _id: String,
    id: String,
    review_id: String,
    url: String
  })

const ReviewPhotos = mongoose.model('ReviewPhotos', reviewPhotosSchema);

module.exports = ReviewPhotos;

module.exports.getAllPhotos = function(id) {
  return ReviewPhotos.find(id);
}

