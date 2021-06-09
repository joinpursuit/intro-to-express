const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.status(418).send("Hello, world!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  response.send("Hasta la vista, baby");
});
app.get("/emeril", (request, response) => {
  response.send("Bam!");
});
app.get("/Steve-McGarrett", (request, response) => {
  response.send("Book 'em Danno!");
});
app.get("/Bruce-Banner", (request, response) => {
  response.send("Don't make me angry");
});
app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});
app.get("/Borg", (request, response) => {
  response.send("Resistance is futile");
});
app.get("/Tony-Montana", (request, response) => {
  response.send("Manolo, choot dat piece o' chit!");
});
app.get("/Jack-Dawson", (request, response) => {
  response.send("I'm king of the world!");
});
app.get("/Rocky", (request, response) => {
  response.send("Yo, Adrian");
});
app.get("/Gollum", (request, response) => {
  response.send("My precious");
});

app.get("/magic8", (request, response) => {
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
  const magic8 = () => {
    return magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  };
  response.send(`<h1>${magic8()}</h1>`);
});

module.exports = app;
