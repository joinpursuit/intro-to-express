const { response, request } = require("express");
const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (request, response) => {
    response.send("Hello World!");
})

app.get("/terminator", (request, response)=> {
    // will show only the first response line
    response.send("Hasta la vista, baby");
    response.send("I'll be back");
})

app.get("/tim-gunn", (request, response)=> {
    response.send("Make it work");
})

app.get("/Emeril", (request, response) => {
    response.send("Bam!");
})

app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together");
})

app.get("/fraiser", (request, response) => {
    response.send("I'm listening");
})

app.get("/FoxMulder", (request, response) => {
    response.send("The truth is out there");
})

// if "Rod Tidwell" rather "RodTidwell" will not get response, it will show "Rod%20Tidwell"
app.get("/Rod Tidwell", (request, response) => {
    response.send("Show me the money!");
})

app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive");
})

app.get("/gollum", (request, response) => {
    response.send("My precious");
})

app.get("/regis", (request, response) => {
    response.send("Is that your final answer?!");
})

app.get("/Borg", (request, response) => {
    response.send("Resistance is futile");
})

app.get("/coach_taylor", (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose");
})

app.get("/magic8", (request, response)=> {
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
let randomPhrase = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
      response.send(`<h1>${randomPhrase}</h1>`);
})

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})