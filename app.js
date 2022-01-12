const express = require("express");
const { response } = require("express");
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

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("smile");
});

app.get("/mickey", (req, res) => {
  res.send("Ya like dags?!");
});

app.get("/bane", (req, res) => {
  res.send(
    "You think darkness is your ally. But you merely adopted the dark. I was born in it. Formed by it..."
  );
});

app.get("/neil", (req, res) => {
  res.send(
    "I do what I do best; I take scores. You do what you do best; try to stop guys like me."
  );
});

app.get("/white", (req, res) => {
  res.send("NOBODY MAKES ME BLEED MY OWN BLOOD, NOBODY!");
});

app.get("/cobb", (req, res) => {
  res.send(
    "An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow. It can grow to define or destroy you."
  );
});

app.get("/baba", (req, res) => {
  res.send(
    "I hope you flip your bike over and knock your two front teeth out! You selfish son of a B! You leave me in the trenches taking grenades, John!"
  );
});

app.get("/billy", (req, res) => {
  res.send("This better work!");
});

app.get("/brickTop", (req, res) => {
  res.send(
    "Do you know what nemesis means? A righteous inflicktion of retribution manifested by an appropriate agent. Personified in this case by an 'orrible *unt...me."
  );
});

app.get("/magic8", (req, res) => {
  let magic8BallAns =
    magic8Responses[(Math.random() * magic8Responses.length) | 0];
  res.send(`<h1>${magic8BallAns}</h1>`);
});

app.listen(3203);
