const supertest = require('supertest')
const request = require('supertest')
const app = require('../app.js')

it('Test to see if supertest works', ()=>{
    expect(1).toBe(1)
})

// describe("Test the root path", () => {
//     test("It should response the GET method", () => {
//         return request(app)
//         .get("/")
//         .then(response => {
//             expect(response.text).toBe('Hello, World!');
//         })
//     })
// })

describe("Test the root path", () => {
    test("It should response the GET method", () => {
        return request(app)
        .get("/")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    })
})