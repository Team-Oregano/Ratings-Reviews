// const { Pool } = require('pg');
// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "Sml1q2w3e!!!",
//   database: "sdcReviews"
// })


// pool.connect()
// .then(() => {
//   console.log('database connected!');
// })
// .catch(() => {
//   console.log('database connect FAIL!');
// })

// pool.query(`Select * from characteristics LIMIT 5`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   pool.end;
// });

// pool.query(`Select * from reviews_photos LIMIT 5`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   pool.end;
// });

// pool.query(`Select * from reviews LIMIT 5`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   pool.end;
// });

// pool.query(`Select * from characteristics_reviews LIMIT 5`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   pool.end;
// });


// module.exports = pool;


