

const request = require("supertest");

const app = require("../app")





describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.text).toBe("Hello?");
        })
    })
  })
  


describe("Test the terminator path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/terminator")
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.text).toBe('I\ll be back');
        })
    })
  })



describe("Test the terminator\'s emeril path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/terminator/emeril")
        .then(response => {
          expect(response.text).toBe('Bam!');
        })
    })
  }) 


describe("Test the magic8 path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/magic8")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })