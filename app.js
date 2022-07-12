// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 3003;

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

function getRandomInt() {
  return Math.floor(Math.random() * max);
}

// ROUTES
app.get("/", (request, response) => {
  response.send("Hello, world!");
});
app.get("/terminator", (request, response) => {
  response.send("Hasta la vista, baby");
});
app.get("/steve-mcgarrett", (request, response) => {
  response.send("Book 'em Danno!");
});
app.get("/bruce-banner", (request, response) => {
  response.send("Don't make me angry");
});
app.get("/zeus", (request, response) => {
  response.send("Release the Kraken");
});
app.get("/magic8", (request, response) => {
  response.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
