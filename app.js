// DEPENDENCIES
const express = require("express");

// CONFIG
const app = express();
const PORT = 3003;
const magic8Resp = [
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
app.get("/dan", (request, response) => {
  response.send(`That\'s what she said.`);
});

app.get("/gisela", (request, response) => {
  response.send("Buy, buy, sell, sell");
});

app.get("/jeanne", (request, response) => {
  response.send("Charger genie rocks");
});

app.get("/neda", (request, response) => {
  response.send("Sign him!");
});

app.get("/siulan", (request, response) => {
  response.send("Prep the fish");
});

app.get("/jessica", (request, response) => {
  response.send(`That\'ll be thirty-nine dollars, please.`);
});

app.get("/magic8", (request, response) => {
  const randomFortune =
    magic8Resp[Math.floor(Math.random() * magic8Resp.length)];
  response.send(randomFortune);
});

// LISTEN
app.listen(3003, () => {
  console.log(`listening on port ${3003}`);
});
