const supertest = require('supertest');

it('Testing to see if supertest works', () => {
  expect(1).toBe(1);
});
const request = require('supertest');

it('Testing to see if supertest works', () => {
  expect(1).toBe(2);
});
describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});


// DEPENDENCIES
const express = require('express')


// CONFIGURATION
const app = express()
const PORT = 3003


// ROUTES
app.get('/', (request, response) => {
    response.send('Hello, world!')
})

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})


// EXPORT
module.exports = app
