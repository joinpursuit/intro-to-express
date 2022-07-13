const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/jaws", (request, response) => {
  response.send("dun nuhn dun nuh");
});

app.get("/annie-hall", (request, response) => {
  response.send("La-dee-da, la-dee-da.");
});

app.get("/scarface", (request, response) => {
  response.send(`Say "hello" to my little friend!`);
});

app.get("/sherlock-holmes", (request, response) => {
  response.send("Elementary, my dear Watson");
});

app.get("/the-shining", (request, response) => {
  response.send("Here's Johnny!");
});

app.get("/goldfinger", (request, response) => {
  response.send("A martini. Shaken, not stirred.");
});

app.get("/casablanca", (request, response) => {
  response.send(
    "Louis, I think this is the beginning of a beautiful friendship."
  );
});

app.get("/the-jazz-singer", (request, response) => {
  response.send("Wait a minute, wait a minute. You ain't heard nothin' yet!");
});

app.get("/dirty-harry", (request, response) => {
  response.send(
    "You've got to ask yourself one question: `Do I feel lucky?` Well, do ya, punk?"
  );
});

app.get("/8ball", (request, response) => {
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
  response.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});
app.listen(3000, () => {
  console.log("Listening for requests on port 3000");
});
