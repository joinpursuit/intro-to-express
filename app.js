const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
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

app.get("/magic", (req, res) => {
  res.send(magic8Responses[Math.floor(Math.random() * magic8Responses.length)]);
  //res.send("Hasta la vista, baby");
});

app.get("/terminator", (req, res) => {
  res.send();
  //res.send("Hasta la vista, baby");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
