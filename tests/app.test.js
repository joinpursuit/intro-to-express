const request = require("supertest");
const app = require("../app.js");

it("Testing to see if the supertest works", () => {
  expect(1).toBe(1);
});

describe("Test the root path", () => {
  test("It should respond with the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });
});
