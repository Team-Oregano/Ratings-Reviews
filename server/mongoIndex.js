const express = require("express");
const db = require('./../mongo/index.js');

const { getAllReviews, createReview } = require('./../mongo/review.js');
const { getAllPhotos } = require('./../mongo/reviewPhotos.js');
const { getCharacteristics } = require('./../mongo/characteristics.js');
const { getCharacteristicsReviews } = require('./../mongo/characteristicsReviews.js');

const app = express();
app.use(express.json());

app.listen(3000, () => {console.log('server listening on port 3000')});


// app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/reviews', function(req,res) {
  getAllReviews({product_id: "1"})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET error!', err);
    res.status(500).send(err);
  });
});

app.get('/reviewphotos', function(req,res) {
  getAllPhotos({review_id: "4"})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET error!', err);
    res.status(500).send(err);
  });
});

app.get('/characteristics', function(req,res) {
  getCharacteristics({product_id: "1"})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET error!', err);
    res.status(500).send(err);
  });
});

app.get('/characteristicsreviews', function(req,res) {
  getCharacteristicsReviews({product_id: "1"})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET error!', err);
    res.status(500).send(err);
  });
});

app.post('/reviews', function(req, res) {
  console.log('req', req.body);
  createReview({body: req.body})
  .then(entry => {
    res.send('Review Created!');
  })
  .catch(err => {
    console.log('POST error!', err);
  res.status(500).send(err);
  })
})

// app.listen(process.env.PORT);
// console.log(`Listening at http://localhost:${process.env.PORT}`);