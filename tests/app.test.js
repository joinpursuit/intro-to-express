const supertest = require("supertest");
const app = require("../app.js");
const request = require("supertest")

// it("Testing to see if supertest works", () => {
//   expect(1).toBe(1);
// });

const allPaths = [
'/',
'/Terminator',
'/Coach-Taylor',
'/Tony-Montana',
'/James-Bond',
'/Batman',
'/Paulie',
'/Vinnie',
'/Weakest-Link',
'/Captain-America',
'/Obi-Wan',
'/magic8',
]

const randomPath = allPaths[Math.floor(Math.random() * allPaths.length)];

  describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe("Test all paths", () => {
  test("It should response the GET method for a random path", () => {
    return request(app)
      .get(randomPath)
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})