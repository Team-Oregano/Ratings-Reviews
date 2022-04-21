const express = require('express');

// const Post = require('../database/Post.js');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));



// getAllPosts = function() {
//   return Post.find({});
// };

// getPostById = function(postId) {
//   return Post.findByIdAndUpdate(postId, {$inc: {likes: 1}}, {new: true});
// };

// app.get('/api/posts', function(req, res) {
//   getAllPosts()
//     .then(data => {
//       console.log('server GET success!');
//       res.send(data);
//     })
//     .catch(err => {
//       console.log('server GET fail!', err);
//       res.status(502).send('bad gateway');
//     });
// });

// app.patch('/api/posts/:postId', function(req, res) {
//   getPostById(req.params.postId)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       console.log('patch GET failed', err);
//       res.status(502).send('bad gateway');
//     });
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});