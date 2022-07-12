const app = require('../app.js');
const supertest = require('supertest');

// TEST PASS
it('Testing to see if supertest works', () => {
  expect(1).toBe(1);
});

// TEST FAILS
it('Testing to see if supertest works', () => {
  expect(1).toBe(2);
});

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.text).toBe(200);
      });
  });
});

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(418)
        })
    })
  });
