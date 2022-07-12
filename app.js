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

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/magic8", (req, res) => {
  let magic8Answer =
    magic8Responses[
      Math.floor(Math.random(magic8Responses) * magic8Responses.length)
    ];
  res.send(`<h1>${magic8Answer}</h1>`);
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("Hasta la vista, baby");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
});

app.get("/regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/borg", (req, res) => {
  res.send("Resistance is futile");
});

app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/gollum", (req, res) => {
  res.send("My precious");
});

app.get("/jack-dawson", (req, res) => {
  res.send("I'm king of the world!");
});

app.listen(3003, () => {
  console.log("Its is alive!");
});
