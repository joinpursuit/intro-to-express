const express = require("express");
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
const magic8answer =
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

app.get("/", (request, response) => {
  response.send(
    `<h1>i love these characters, type a forward slash followed by one of the names bellow in the URL</h1>
    <ul>
    <li>fox mulder</li>
    <li>batman</li>
    <li>gollum</li>
    <li>terminator</li>
    <li>Homer Simpson</li>
    <li>Tony Montana</li>
    <li>dorothy</li>
    <li>frankenstein</li>
    <li>Rocky</li>
    </ul>
    <h2>type in magic8 to get a prediction</h2>`
  );
});

app.get("/fox-mulder", (request, response) => {
  response.send("The truth is out there");
});

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/gollum", (request, response) => {
  response.send("My precious!");
});

app.get("/terminator", (request, response) => {
  response.send(`i'll be back... with weapons`);
});

app.get("/Homer-Simpson", (request, response) => {
  response.send(`D'Oh`);
});

app.get("/tony-montana", (request, response) => {
  response.send(`Say hello to my little friend`);
});

app.get("/Dorothy", (request, response) => {
  response.send(`Toto, I've got a feeling we're not in Kansas anymore`);
});

app.get("/frankenstein", (request, response) => {
  response.send(`It's alive! It's alive`);
});

app.get("/Rocky", (request, response) => {
  response.send(`Yo, Adrian`);
});

app.get("/magic8", (request, response) => {
  response.send(`<h1>${magic8answer}</h1>`); //need a little help with this one
});

module.exports = app