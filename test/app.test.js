// ../ IS A LEVEL ABOVE CURRENT LEVEL
const mango = require("../app");
// SUPERTEST IS ONE OF DOWNLOADED LIBRARY, LIKE EXPRESS
const peach = require("supertest");

//  it('Testing to see if supertest works', ()=> {
//    expect(1).toBe(1)
//  })
describe("Test the terminator path", () => {
    test("My name is Classic", () => {
        return peach(mango)
        .get("/terminator")
        .then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe("Hasta la vista, baby")
        })
    })
})

describe("Test the frasier path", () => {
    test("Responds to get method", () => {
        return peach(mango)
        .get("/frasier")
        .then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe("I\'m listening")
        })
    })
})