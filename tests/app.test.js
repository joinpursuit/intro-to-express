// DEPENDENCIES
const app = require('../app.js')
const request = require('supertest')


// Supertest: 
it('Testing to see if supertest works', ()=> {
    expect(1).toBe(1)
})
//

// Routes:

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
})

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(418)
        })
    })
  })


  