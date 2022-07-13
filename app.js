const { response } = require("express");
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
  "Very doubtful",
];

const shakeTheBall = () => {
  return magic8Responses[Math.floor(Math.random() * 19)];
};

app.get("/", (req, res) => {
  res.send("You shouldn't be seeing this. Get out of here");
});

app.get("/magic8", (req, res) => {
  res.send(`<h1>${shakeTheBall()}</h1>`);
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/hawaii50", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/homer", (req, res) => {
  res.send("D'Oh!");
});

app.get("/hulk", (req, res) => {
  res.send("");
});

// EXPORT
module.exports = app;
