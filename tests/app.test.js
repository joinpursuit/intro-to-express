const app = require('../app.js')
const request = require('supertest')

// it('Testing to see if supertest works', ()=> {
//     expect(1).toBe(1)
//   })

  describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Terminator path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Terminator")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Terminator2 path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Terminator2")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Homer Simpson path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Homer-Simpson")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the JJ Evans path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/JJ-Evans")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Batman path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Batman")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Hannibal Smith path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Hannibal-Smith")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Jack Dawson path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Jack-Dawson")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Frankenstein path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Frankenstein")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Tony Montana path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Tony-Montana")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Dorothy path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Dorothy")
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Rod Tidwell path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/Rod-Tidwell")
        .then(response => {
            expect(response.statusCode).toBe(200)
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