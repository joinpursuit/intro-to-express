const supertest = require("supertest");
const { request } = require("../app.js");
const app = require("../app.js");

it("Testing to see if supertest works", () => {
    expect(1).toBe(1)
});
// it("Testing to see if supertest works", () => {
//     expect(1).toBe(2)
// });

describe("Test the root path", () => {
    test("It should response the GET method", () => {
       return request(app)
        .get("/")
        .then(response => {
            expect(response.text).toBe("Hello, from Jede!");
            // expect(response.statusCode).toBe(200);
          })
    })
})