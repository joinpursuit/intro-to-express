//The way we import a library on the server side.
const express = require("express");
// express is actually a function
// and it returns an object with which
// we can manage a server.
const app = express();
// this is the port will use; It's good to
// have this variable in case we want to change it later.
// so we don't have to hunt it down.
// We capitalize this variable to indicate to other programmers
// that this is a GLOBAL CONSTANT.
const PORT = 3003;
// The server object, "app," has several
// methods. One is ".get". It handles GET
// request.
// It takes two arguments:
// - a string for route
// - a function to call(a callback!)
// whenever any client sends a request.
// When the Express server gets a request,
// it calls your callback and gives it two
// values:
// - The request.
// - The response.
// The response object has a bunch of methods
// for sending a request back to client.

const magic8Responses = [
  "It is certain", //magic8Responses[randomNum]
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

app.get("/magic8", (request, response) => {
  const randomNum = Math.floor(Math.random() * magic8Responses.length);
  response.send(`<h1>${magic8Responses[randomNum]}</h1>`);
});

app.get("/", (request, response) => {
  response.send("Hi there");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/terminator2", (request, response) => {
  response.send("Hasta la vista, baby");
});

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/tonymontana", (request, response) => {
  response.send("Say hello to my little friend");
});

app.get("/jamesbond", (request, response) => {
  response.send("the name is Bond, James Bond");
});

app.get("/frankenstein", (request, response) => {
  response.send("It's alive! It's alive");
});

app.get("/fraiser", (request, response) => {
  response.send("I'm listening");
});

app.get("/zeus", (request, response) => {
  response.send("Release the Kraken");
});

app.get("/brucebanner", (request, response) => {
  response.send("Don't make me angry");
});

app.get("/homersimpson", (request, response) => {
  response.send("D'Oh");
});
// A basically required method to use on your
// server. It lets you open up the server to
// requests.
// It takes two arguments:
// _ a number for the port to listen on.
// - a function to call back when the
// server is up and running.
// We typically run a console.log in the callback
// to let us Know that it worked.
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
