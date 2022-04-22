const mongoose = require('mongoose');


const characteristicsSchema = new mongoose.Schema(
  {
    _id: String,
    id: String,
    product_id: String,
    name: String
  })

const Characteristics = mongoose.model('Characteristics', characteristicsSchema);

module.exports = Characteristics;

module.exports.getCharacteristics = function(id) {
  return Characteristics.find(id);
}

