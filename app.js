const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.get("/terminator", (req, res) => {
  res.status(200).send("I'll be back");
  // res.send("Hasta la vista, baby");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/steve%20mcgarrett", (req, res) => {
  console.log(req);
  res.send("Book 'em Danno!");
});

app.get("/coach%20taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/homer%20simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/bruce%20banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/jj%20evans", (req, res) => {
  res.send("Dy-no-myte");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/hannibal%20smith", (req, res) => {
  res.send("I love it when a plan comes together");
});

app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
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
const random8 = () => Math.floor(Math.random() * magic8Responses.length);

app.get("/magic8", (req, res) => {
  res.send(magic8Responses[random8()]);
});

module.exports = {
    random8
}
module.exports = app;


