const supertest = require('supertest')
const app = require('../app.js')

// it('Testing to see if supertest works', ()=> {
//     expect(1).toBe(2)
//   })


describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(418)
        })
    })
  })

  app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})