const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/sdcReviews';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;


db.once('connected', function() {
  console.log('Mongodb connected...');
});

module.exports = db;