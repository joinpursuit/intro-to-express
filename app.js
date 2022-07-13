//DEPENDENCIES
const express = require("express");

//CONFIG

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

const random = magic8Responses[Math.floor(Math.random() * 19)];

//ROUTES

app.get("/", (req, res) => {
  res.send("Hello, Pursuit");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/homer", (req, res) => {
  res.send("Doh!");
});

app.get("/batman", (req, res) => {
  res.send("To the batmobile!");
});

app.get("/hannibal", (req, res) => {
  res.send("it puts the lotion on the skin or else it gets the hose again");
});

app.get("/nightmareonelm", (req, res) => {
  res.send("Welcome to Prime Time, $!@#*");
});

app.get("/chucky", (req, res) => {
  res.send("Hi, Im chucky wanna play!");
});
app.get("/scarymovie", (req, res) => {
  res.send("Waaaazaaaaaaaaaaaa");
});

app.get("/jaws", (req, res) => {
  res.send("Youre gonna needa  bigger boat");
});

app.get("/frankenstein", (req, res) => {
  res.send("Its alive! its alive!!");
});

app.get("/dracula", (req, res) => {
  res.send("I never drink..... Wine.");
});

app.get("/magic8", (req, res) => {
  res.send(`<h1>${random}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
