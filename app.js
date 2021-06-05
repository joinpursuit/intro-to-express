const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("I love express!");
});
app.get("/terminator", (request, response) => {
    response.send("I'll be back");
});
app.get("/terminator2", (request, response) => {
    response.send('Hasta la vista, baby')
});
app.get("/jjevans", (request, response) => {
    response.send("Dy-no-myte!!");
});
app.get("/batman", (request, response) => {
    response.send("To the Batmobile!");
});
app.get("/HannibalSmith", (request, response) => {
    response.send("I love it when a plan comes together");
});
app.get("/Zeus", (request, response) => {
    response.send("Release the Kraken");
});
app.get("/JamesBond", (request, response) => {
    response.send("the name is Bond, James Bond");
});
app.get("/Frankenstein", (request, response) => {
    response.send("It's alive! It's alive");

}); app.get("/Rocky", (request, response) => {
    response.send("Yo, Adrian");
});
app.get("/Gollum", (request, response) => {
    response.send("My precious");
});
app.get("/JackDawson", (request, response) => {
    response.send("I'm king of the world!");
});
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

]
app.get("/magic8", (request, response) => {
    let randomPhrase = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]
    response.send(`<h1>${randomPhrase}</h1>`);
});
app.listen(3003, () => {
    console.log("I am listening for requests on port 3003!");
});