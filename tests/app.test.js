const request = require("supertest");
const app = require("../app");

// it("testing to see if supertest works", () => {
//   expect(1).toBe(1);
// });

describe("test the root path", () => {
  test("it should response the GET method", async () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });
});
