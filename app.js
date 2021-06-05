const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;
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

app.listen(PORT, () => {
  console.log("Listening for request on Port:", PORT);
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back!");
});

app.get("/terminator2", (req, res) => {
  res.send("Hasta la vista, baby");
});

app.get("/homer", (req, res) => {
  res.send("D'oh");
});

app.get("/zeus", (req, res) => {
  res.send("Release the Kraken!");
});

app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/jamesbond", (req, res) => {
  res.send("the name is Bond, James Bond");
});

app.get("/gollum", (req, res) => {
  res.send("My precious");
});

app.get("/jackdawson", (req, res) => {
  res.send("I'm king of the world!!");
});

app.get("/tonymontana", (req, res) => {
  res.send("Say hello to my little friend!");
});

app.get("/jimlovell", (req, res) => {
  res.send("Houston, we have a problem!");
});

app.get("/travisbickle", (req, res) => {
  res.send("You talkin' to me!");
});

app.get("/magic8", (req, res) => {
    const randomMagic = magic8Responses[Math.floor(magic8Responses.length * Math.random())]
  res.send(`<h1>${randomMagic}</h1>`);
});

