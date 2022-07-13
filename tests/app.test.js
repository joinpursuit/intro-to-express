
const request = require('supertest');
const app = require("../app");

// it('Testing to see if supertest works', () => {
//     expect(1).toBe(1);
// });

describe(`Test the root path`, () => {
  test("It should respond with the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect (response.statusCode).toBe(200);
        // expect(response.text).toBe(
        //   "You shouldn't be seeing this. Get out of here"
        // );
      });
  });
});
