const request = require("supertest");
const app = require("../app.js");

describe("Test the root path", () => {
  test("It should response the GET Home page", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Terminator", () => {
    return request(app)
      .get("/terminator")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Jordan ", () => {
    return request(app)
      .get("/jordan")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Jeff ", () => {
    return request(app)
      .get("/jeff")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Zeus ", () => {
    return request(app)
      .get("/zeus")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Travis Bickle ", () => {
    return request(app)
      .get("/travisbickle")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Regis ", () => {
    return request(app)
      .get("/regis")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Rod Tidwell", () => {
    return request(app)
      .get("/rodtidwell")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Fraiser", () => {
    return request(app)
      .get("/fraiser")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET Terminator2", () => {
    return request(app)
      .get("/terminator2")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should response the GET magic8", () => {
    return request(app)
      .get("/magic8")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
