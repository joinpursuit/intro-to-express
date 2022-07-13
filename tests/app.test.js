const app = require("../app.js");
const supertest = require('supertest');

 it('Testing to see if supertest works', async () => {
   expect(1).toBe(1)
 })

// describe("Test the root path", () => {
//   test("It should response the GET method", async () => {
//     return request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(418);
//       });
//   });
// });
