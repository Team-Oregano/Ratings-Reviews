const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");


const { Review } = require('./../mongo/review.js');
const { MetaData } = require ('./../mongo/metadata.js');

const app = express();
app.use(express.json());


async function main() {
  await mongoose.connect("mongodb://localhost:27017/sdcReviews", {
      useNewUrlParser: true,
    })
  }

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));
  db.once('connected', function() {
    console.log('Mongodb connected...');
  });

  main().catch(err => console.log(err));


app.get('/reviews/:id', function(req,res) {
  console.log('req', req.params);
  var productId = req.params.id;
  console.log('pid', productId);

  Review.find({product_id: productId})
  .limit(2)
  .then(data => {
    console.log(data);
    res.status(200).send(data);
  })
  .catch(err => {
    console.log('GET REVIEWS error!', err);
    res.status(404).send(err);
  });
});

app.get('/reviews/meta/:id', (req, res) => {
  var product_id = req.params.id;

  MetaData.find({product_id: product_id})
  .then(data => {
    console.log(data);
    res.staus(200).send(data);
  })
  .catch(err => {
    console.log( 'GET METADATA error!', err);
  })
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  Review.findByIdAndUpdate(req.params.review_id, {$inc: {helpfulness: 1}})
  .then((data => {
    res.status(200);
  }))
  .catch((err => {
    res.status(404).send(err);
  }))
})

app.put('/reviews/:review_id/report', (req, res) => {
  Review.findByIdAndUpdate(req.params.review_id, {$set: {reported: true}})
  .then ((data => {
    res.status(200);
  }))
  .catch((err => {
    res.status(404).send(err);
  }))
})

app.post('/reviews', (req, res) => {

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
