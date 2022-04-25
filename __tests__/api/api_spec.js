const frisby = require('frisby');


it('should return success code', function() {
  jest.setTimeout(60000);
  return frisby.get('http://localhost:3000/reviews')
    .expect('status', 200);
});

it('should return success code', function() {
  jest.setTimeout(60000)
  return frisby.get('http://localhost:3000/reviewphotos')
  .expect('status', 200);
})

it('should return success code', function() {
  jest.setTimeout(60000)
  return frisby.get('http://localhost:3000/characteristics')
  .expect('status', 200);
})

  it('should return success code', function() {
    jest.setTimeout(60000)
    return frisby.get('http://localhost:3000/characteristicsreviews')
    .expect('status', 202);
  })
