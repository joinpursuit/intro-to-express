// DEPENDENCIES
const app = require("../app.js")
const request = require("supertest")
const magic8Responses = require("../data.js");

    // it("Testing to see if supertest works", () => {
    //     expect(1).toBe(2)
    // })

    describe("Test the root path", () => {
        test("It should response the GET method and display a dog or cat status image of 418", () => {
            return request(app)
                .get("/")
                .then(res => {
                    expect(res.statusCode).toBe(418);
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Terminator quote", () => {
            return request(app)
                .get("/terminator")
                .then(res => {
                    expect(res.text).toBe("I'll be back & Hasta la vista, baby");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Batman quote", () => {
            return request(app)
                .get("/batman")
                .then(res => {
                    expect(res.text).toBe("To the Batmobile!");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Homer Simpson quote", () => {
            return request(app)
                .get("/homer-simpson")
                .then(res => {
                    expect(res.text).toBe("D'Oh");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Bruce Banner quote", () => {
            return request(app)
                .get("/bruce-banner")
                .then(res => {
                    expect(res.text).toBe("Don't make me angry");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Tony Montana quote", () => {
            return request(app)
                .get("/tony-montana")
                .then(res => {
                    expect(res.text).toBe("Say hello to my little friend");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Zeus quote", () => {
            return request(app)
                .get("/zeus")
                .then(res => {
                    expect(res.text).toBe("Release the Kraken");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the James Bond quote", () => {
            return request(app)
                .get("/james-bond")
                .then(res => {
                    expect(res.text).toBe("the name is Bond, James Bond");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Frankenstein quote", () => {
            return request(app)
                .get("/frankenstein")
                .then(res => {
                    expect(res.text).toBe("It's alive! It's alive");
                })
        })
    })

    describe("Test the root path", () => {
        test("It should response the Rocky Balboa quote", () => {
            return request(app)
                .get("/rocky")
                .then(res => {
                    expect(res.text).toBe("Yo, Adrian");
                })
        })
    })

    describe("Test the root path", () => {
        const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
        test("It should response Mutiple dynamic quotes", () => {
            return request(app)
                .get("/magic8")
                .then(res => {
                    expect(res.statusCode).toBe(200);
                })
        })
    })