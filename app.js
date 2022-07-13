const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.get("/", (request, response) => {
    response.send("Here we are Thierry and Jede!")
});
app.listen(3003, () => {
    console.log(`we are running ${PORT}`)
});
app.get("/terminator", (request, response) => {
    response.send("Hasta la vista, baby")
    // response.send("I'll be Back for Thierry and Jede!")
});
app.get("/TIMgunn", (request, response) => {
    response.send("Fierce!")
});
app.get("/Emeril", (request, response) => {
    response.send("Bam!")
});
app.get("/SteveMcGarret", (request, response) => {
    response.send("Book 'em Danno!")
});
app.get("/HomerSimpson", (request, response) => {
    response.send("D'Oh")
});
app.get("/Batman", (request, response) => {
    response.send("To the Batmobile!")
});
app.get("/HannibalSmith", (request, response) => {
    response.send("I love it when a plan comes together")
});
app.get("/Fraiser", (request, response) => {
    response.send("I'm listening")
});
app.get("/Zeus", (request, response) => {
    response.send("Release the Kraken")
});
app.get("/James Bond", (request, response) => {
    response.send("the name is Bond, James Bond")
});
app.get("/Dorothy", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
});
app.get("/Gollum", (request, response) => {
    response.send("My precious")
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
    const magic8Answer = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]
    response.send(`<h1>${magic8Answer}</h1>`)
});
