const app = require("../app.js");
const request = require("supertest");
const supertest = require("supertest");

it("Testing to see if supertest works", () => {
  expect(1).toBe(1);
});

it("Testing to see if supertest works", () => {
  expect(2).toBe(2);
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return request(app)
//       .get("/")
//       .then(response => {
//         expect(response.statusCode).toBe(418)
//       })
//   })
// })
