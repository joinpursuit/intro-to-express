const express = require("express");
const app = express();

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

app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})

app.get("/homer-simpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/james-bond", (request, response) => {
  response.send("the name is Bond, James Bond");
});

app.get("/dorothy", (request, response) => {
  response.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/universe", (request, response) => {
  response.send("Hello Universe!");
});

app.get("/frankenstein", (request, response) => {
  response.send("It's alive! It's alive");
});

app.get("/rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/zeus", (request, response) => {
  response.send("Release the Kraken");
});

app.get("/borg", (request, response) => {
  response.send("Resistance is futile");
});

app.get("/magic8", (request, response) =>{
    response.send(magic8Responses[Math.floor(Math.random() * 19)])
})

app.get('/terminator', (req, res) => {
  res.send('I\ll be back')
})

app.get('/terminator2', (req, res) => {
  res.send('Hasta la vista, baby')
})


module.exports = app

