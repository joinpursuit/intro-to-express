const { random8 } = require("../app");
const app = require("../app.js");
const req = require("supertest");

console.log(random8)

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return req(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the terminator path", () => {
  test("It should response the GET method", () => {
    return req(app)
      .get("/terminator")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the magic8 path", () => {
  test("It should response the GET method", () => {
    return req(app)
      .get("/magic8")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
//   test("returns a whole number", () => {
//       console.log(random8())
//     // expect(Number.isInteger(random8())).toBe(true)
//   })
});

// it("Testing to see if supertest works", () => {
//   expect(1).toBe(1);
// });

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return req(app)
//       .get("/")
//       .then((response) => {
//         expect(response.text).toBe("Hello, world!");
//       });
//   });
// });

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return req(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(418);
//       });
//   });
// });
