const request = require("supertest");

const app = require("../app.js");

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.text).toBe("Hello, world!");
//       });
//   });
// });

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.text).toBe("Hello, world!");
      });
  });
});
