const app = require("../app.js");

const request = require("supertest");

it("testing testing 123", () => {
  expect(1).toBe(1);
});

//describe() -- takes a string as the 1st arguemtn and a callback as the 2nd
describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.text).toBe("Hello, world!");
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });
});
