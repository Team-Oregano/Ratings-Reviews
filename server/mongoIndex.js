const express = require("express");
const db = require('./../mongo/index.js');

const { getAllReviews, createReview, reviewHelpful, reviewReport } = require('./../mongo/review.js');
const { getAllPhotos } = require('./../mongo/reviewPhotos.js');
const { getCharacteristics } = require('./../mongo/characteristics.js');
const { getCharacteristicsReviews } = require('./../mongo/characteristicsReviews.js');

const app = express();
app.use(express.json());

app.listen(3000, () => {console.log('server listening on port 3000')});


app.get('/reviews/', function(req,res) {
  getAllReviews({})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET REVIEWS error!', err);
    res.status(500).send(err);
  });
});

app.get('/reviewphotos', function(req,res) {
  getAllPhotos({})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET PHOTOS error!', err);
    res.status(500).send(err);
  });
});

app.get('/characteristics', function(req,res) {
  getCharacteristics({})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET CHARACTERISTICS error!', err);
    res.status(500).send(err);
  });
});

app.get('/characteristicsreviews', function(req,res) {
  getCharacteristicsReviews({})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('GET CR error!', err);
    res.status(500).send(err);
  });
});


app.post(`/reviews`, function(req, res) {
  createReview({})
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('POST error!', err);
    res.status(404).send(err);
  })
});


app.put(`/reviews`,  function(req, res) {
  reviewHelpful({})
  .then(data => {
      console.log(data);
      res.send(data);
    })
  .catch(err => {
    console.log('Post error!', err);
    res.status(404).send(err);
  })
})

