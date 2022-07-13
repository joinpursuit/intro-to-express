const express = require("express");
const app = express();


app.get("/", (request, response) => {
    response.send("Hello 8.4!!!!!")
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back")
});

app.get("/tim-gunn", (request, response) => {
    response.send("Make It Work")
});

app.get("/emeril", (request, response) => {
    response.send("Bam!")
});

app.get("/batman", (request, response) => {
    response.send("To the batmobile!")
});

app.get("/jamesbond", (request, response) => {
    response.send("The name is Bond")
})

app.get("/zeus", (request, response) => {
    response.send("Release the Kraken!")
})

app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive!")
})

app.get("/dorothy", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore!")
})

app.get("/gollum", (request, response) => {
    response.send("My precious!")
})

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
  
  ]

const magic8Answer = magic8Responses[Math.floor(Math.random()*magic8Responses.length)];
response.send(`<h1>${magic8Answer}</h1>`);
})

app.listen(3003, () => {
    console.log("Listening on port 3003 8.4")
});