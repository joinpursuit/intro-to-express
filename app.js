// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 3333;

// ROUTES
app.get("/", (request, response) => {
  response.status(418).send("Hello, world!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/Mike-Sorrentino", (req, res) => {
  res.send("It's a situation!");
});

app.get("/Gordon-Ramsey", (req, res) => {
  res.send("Why did the chicken cross the road? Because you didn’t f—ing cook it!!");
});

app.get("/Michael-Scott", (req, res) => {
  res.send("I’m not superstitious, but I am a little stitious.");
});

app.get("/James-Bond", (req, res) => {
  res.send("The name is Bond, James Bond");
});

app.get("/Regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/Rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/Tony-Montana", (req, res) => {
  res.send("Say hello to my little friend!");
});

app.get("/Travis-Bickle", (req, res) => {
  res.send("You talking to me?");
});

app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
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

const magic8Answer =
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Answer}</h1>`);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// EXPORT
module.exports = app;
