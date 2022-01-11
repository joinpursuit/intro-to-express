const request = require("supertest");
const app = require("../app.js");
// it("Test to see if super works", () => {
//   expect(1).toBe(1);
// });
describe("Test the root path, Sara path, and magic8 path", () => {
  test("It should response a get request from /", () => {
    return request(app)
      .get("/")
      .then((response) => expect(response.statusCode).toBe(200));
  });
  test("It should response a get request from /sara", () => {
    return request(app)
      .get("/sara")
      .then((response) => expect(response.text).toBe("i know how to talk"));
  });
  test("It should response a get request from /magic8", () => {
    return request(app)
      .get("/magic8")
      .then((response) => expect(response.statusCode).toBe(200));
  });
});
