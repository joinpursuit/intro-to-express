// DEPENDENCIES
const express = require("express");

// CONFIGURATION
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
  "Very doubtful",
];
const terminatorResponses = ["I'll be back", "Hasta la vista, baby"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//ROUTES
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/", (request, response) => {
//   response.status(200).send("Hello, world!");
// });

app.get("/", (req, res) => {
  res.status(418).send("Hello, world!");
});

app.get("/terminator", (req, res) => {
  res.send(`<h1>${terminatorResponses[getRandomInt(2)]}</h1>`);
});

app.get("/HannibalSmith", (req, res) => {
  res.send("I love it when a plan comes together");
});
app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
});
app.get("/Dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});
app.get("/Frankenstein", (req, res) => {
  res.send("It's alive! It's alive");
});
app.get("/JimLovell", (req, res) => {
  res.send("Houston, we have a problem");
});
app.get("/Rocky", (req, res) => {
  res.send("Yo, Adrian");
});
app.get("/Gollum", (req, res) => {
  res.send("My precious");
});
app.get("/JackDawson", (req, res) => {
  res.send("I'm king of the world!");
});
app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Responses[getRandomInt(19)]}</h1>`);
});

// EXPORT
module.exports = app;
