const app = require("../app.js");
const request = require("supertest");

// it("Testing to see if supertest works", () => {
//     expect(1).toBe(1)
// })

describe("Test the root path", () => {
  test("It should return 'Hello Client!'", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.text).toBe("Hello Client!");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the terminator path", () => {
  test("It should return 'I'll be back'", () => {
    return request(app)
      .get("/terminator")
      .then(response => {
        expect(response.text).toBe("I'll be back");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/terminator")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the tony-montana path", () => {
  test("It should return 'Say hello to my little friend'", () => {
    return request(app)
      .get("/tony-montana")
      .then(response => {
        expect(response.text).toBe("Say hello to my little friend");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/tony-montana")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the king-leonidas path", () => {
  test("It should return 'This is Sparta!'", () => {
    return request(app)
      .get("/king-leonidas")
      .then(response => {
        expect(response.text).toBe("This is Sparta!");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/king-leonidas")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the sailor-moon path", () => {
  test("It should return 'In the name of the moon I will punish you!'", () => {
    return request(app)
      .get("/sailor-moon")
      .then(response => {
        expect(response.text).toBe("In the name of the moon I will punish you!");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/sailor-moon")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the yami-yugi path", () => {
  test("It should return 'It's time to duel!'", () => {
    return request(app)
      .get("/yami-yugi")
      .then(response => {
        expect(response.text).toBe("It's time to duel!");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/yami-yugi")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the ryoma-echizen path", () => {
  test("It should return 'Made made dane'", () => {
    return request(app)
      .get("/ryoma-echizen")
      .then(response => {
        expect(response.text).toBe("Made made dane");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/ryoma-echizen")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the kenshirou path", () => {
  test("It should return 'Omae wa mou shindeiru. NANI!?'", () => {
    return request(app)
      .get("/kenshirou")
      .then(response => {
        expect(response.text).toBe("Omae wa mou shindeiru. NANI!?");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/kenshirou")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the kamina path", () => {
  test("It should return 'Just who the h*** do you think I am?'", () => {
    return request(app)
      .get("/kamina")
      .then(response => {
        expect(response.text).toBe("Just who the h*** do you think I am?");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/kamina")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the monkey-d.-luffy path", () => {
  test("It should return 'I'm going to be the pirate king!'", () => {
    return request(app)
      .get("/monkey-d.-luffy")
      .then(response => {
        expect(response.text).toBe("I'm going to be the pirate king!");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/monkey-d.-luffy")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});

describe("Test the mayuri_shiina path", () => {
  test("It should return 'Tuturuu'", () => {
    return request(app)
      .get("/mayuri_shiina")
      .then(response => {
        expect(response.text).toBe("Tuturuu");
      })
  });

  test("It should response with 418 status code", () => {
        return request(app)
        .get("/mayuri_shiina")
        .then(response => {
            expect(response.statusCode).toBe(418);
        })
    });
});



