const supertest = require('supertest')
const { request, response } = require('../app.js')
const app = require('../app.js')

it('testing to see if supertest works' , () => {
    expect(1).toBe(1)
})

describe("test the root path", () => {
    test('it should response the GET method', () => {
        return request(app)
        .get('/')
        .then(response => {
            expect(response.text).toBe('Hello, world!')
        })
    })
})