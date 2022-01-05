//The way we import a library on the server side.
const express = require("express");
const { request } = require("http");

// 'express' is actually a function,
// and it returns an object with which
// we can manage a server.
const app = express();

// The port we are going to use.
// It's good to have this variable in case
// we want to change it later.
// We capitalize this variable
// to indicate to other programmers
// that this is a global constant.
const PORT = 3003;

// The server object, 'app', has several methods.
// One is '.get'. It handles GET requests.
// It takes two arguments:
// - a string for the route
// - a function to call (a callback!)
// whenever any client sends this request.
// When the express server gets a request,
// it calls your callback and gives it two
// values:
// - The request
// - The response
// The response object has a bunch of methods
// for sending a response back to the client.
app.get("/", (request, response) => {
  response.send("Success! (Basic) Server is Express");
});

app.get("/bruce-banner", (request, response) => {
  response.send("Don't make me angry!");
});

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/frankenstein", (request, response) => {
  response.send("It's alive! It's alive!");
});

app.get("/darth-vader", (request, response) => {
  response.send("The force is strong with this one!");
});

app.get("/yoda", (request, response) => {
  response.send("Feel the force!");
});

app.get("/homer-simpson", (request, response) => {
  response.send("D'oh");
});

app.get("/tony-montana", (request, response) => {
  response.send("Say hello to my little friend");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back ");
});

app.get("/terminator-esp", (request, response) => {
  response.send("Hasta la vista, baby!");
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
    "Very doubtful"
  
  ]

const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

app.get("/magic8", (request, response) => {
    response.send(`<h1>${magic8Answer}</h1>`);
  });

// Basically a required method to use on your server.
// It lets you open up the server to requests.
// It takes two arguments:
// - a number for the port to listen on.
// - a function to call back when the server is up & running.
// Typically we run a console log in the callback
// to let us know that it is working.
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
