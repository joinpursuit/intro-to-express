// DEPENDENCIES
const app = require('../app.js')
const request = require('supertest')

// it('Testing to see if supertest works', ()=> {
//   expect(1).toBe(1)
// })


describe("Test path responses", () => {
    test("response of GET method of terminator", () => {
      return request(app)
        .get("/terminator")
        .then(response => {
          expect(response.text).toBe('Hasta la vista, baby');
        })
    })

    test("response of GET method of Emeril", () => {
        return request(app)
          .get("/Emeril")
          .then(response => {
            expect(response.text).toBe('Bam!');
          })
      })

  })