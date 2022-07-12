const request = require("supertest");
const app = require("../app.js");

describe("Test the root path.", () => {
  test("It should respond with status code 200 with the GET method.", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test if /teapot is a teapot.", () => {
  test("It should respond with status code 418 with the GET method.", () => {
    return request(app)
      .get("/teapot")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });
});
