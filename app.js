const express = require("express");
const res = require("express/lib/response");
let app = express();

app.get("/terminator", (req, res) => {
    res.send("Hasta la vista, baby");
});

app.get("/tim-gunn", (req, res) => {
    res.send("Make it work")
});

app.get("/emeril", (req, res) => {
    res.send("Bam!")
});

app.get("/steve-mcgarrett", (req, res) => {
    res.send("Book 'em Danno!")
});

app.get("/coach-taylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't lose")
});

app.get("/homer-simpson", (req, res) => {
    res.send("D'oh!")
});

app.get("/bruce-banner", (req, request) => {
    res.send("Don't make me angry")
});

app.get("/tony-montana", (req, res) => {
    res.send("Say hello to my little friend")
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

  const getResponses = () => {
      return magic8Responses[Math.floor(Math.random()*magic8Responses.length)];
      }

app.get("/magic8", (req, res) =>{

    res.send(`<h1>${getResponses()}</h1>`);
})

app.listen(3003);