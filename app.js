const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back, Hasta la vista, baby");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Here's looking at you, kid");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/JJ-evans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Fox%20Mulder", (req, res) => {
  res.send("The truth is out there");
});

app.get("/Travis_Bickle", (req, res) => {
  res.send("You talkin' to me?");
});

app.get("/Tony-Montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/JamesBond", (req, res) => {
  res.send("the name is Bond, James Bond");
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
  "Very doubtful",
];

const magic8Answer = () => {
  return magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
};

app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Answer()}</h1>`);
});

// app.get('/', (request, response) => {
//   response.status(418).send('Hello, world!')
// })

module.exports = app;
