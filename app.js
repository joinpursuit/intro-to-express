//import library on the server side
const express = require("express");

// 'express' is a function that returns an object
// with which we can manage a server
const app = express();

const PORT = 3003;

// When the express server gets a request it calls
// your callback and gives it two values
// request, response
// response has many methods to send response to client
app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/terminator", (req, res) => {
  res.send(["I'll be back", "Hasta la vista, baby"]);
  //   res.send("Hasta la vista, baby");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/steve-mcgarrett", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/coach-taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/bruce-banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/jj-evans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/hanibal-smith", (req, res) => {
  res.send("I love it when a plan comes together");
});
app.get("/magic8", (req, res) => {
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
  const answer =
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(`
    <h1>${answer}</h1>
    `);
});
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
