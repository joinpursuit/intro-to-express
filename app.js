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

// ROUTES
app.get("/", (req, res) => {
  res.status(418).send(`
    <img src="https://httpstatusdogs.com/img/418.jpg" alt="dog tea pot" />
  `);
});

app.get("/terminator", (req, res) => {
  res.send(`
    <p>I'll be back</p>
    <p>Hasta la vista, baby</p>
  `);
  // res.send("Hasta la vista, baby");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/Steve-McGarrett", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/Homer-Simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/Bruce-Banner", (req, res) => {
  res.send("Don't make me angry, You wouldn't like me when I'm angry");
});

app.get("/Regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/quagmire-host", (req, res) => {
  res.send("Who else but quagmire?");
});

app.get("/Dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/Rod-Tidwell", (req, res) => {
  res.send("Show me the money!");
});

app.get("/Scarface", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/magic8", (req, res) => {
  const randomMagic8 = Math.floor(Math.random() * magic8Responses.length);

  res.send(`
  <h1>${magic8Responses[randomMagic8]}</h1>
  `);
});

// EXPORT
module.exports = app;
