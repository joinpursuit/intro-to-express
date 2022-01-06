// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES

app.get("/", (request, response) => {
    response.status(418).send(`<img src="https://httpstatusdogs.com/img/418.jpg" alt="dogs" />`);
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back & Hasta la vista, baby");
    // response.send("Hasta la vista, baby");
});

app.get("/batman", (request, response) => {
    response.send("To the Batmobile!");
});

app.get("/homer-simpson", (request, response) => {
    response.send("D'Oh");
});

app.get("/bruce-banner", (request, response) => {
    response.send("Don't make me angry");
});

app.get("/tony-montana", (request, response) => {
    response.send("Say hello to my little friend");
});

app.get("/zeus", (request, response) => {
    response.send("Release the Kraken");
});

app.get("/james-bond", (request, response) => {
    response.send("the name is Bond, James Bond");
});

app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive");
});

app.get("/rocky", (request, response) => {
    response.send("Yo, Adrian");
});

app.get("/magic8", (request, response) => {

    const magic8Responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - Definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes, and signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    
    ];

    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

    console.log(magic8Answer);

    response.send(`<h1>${magic8Answer}</h1>`);
})

// EXPORT
module.exports = app;