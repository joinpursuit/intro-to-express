// The way we import a library on the server side
const { request, response } = require("express");
const express = require("express");

// `express` is actually a function
// and it returns an object with which
// we can manage a server
const app = express();

// port we'll use. good to have
// var incase we want to change it later
// Capitalize to indicate to other
// programmers that it's a GLOBAL CONSTANT
const PORT = 3003;

// The server object 'app', had several
// methods. One id  '.get'. It handles GET requests.
// It takes two arguments:
// - a string for the route
// - a function to call (a callback!)
// whenever any client sends this request
// When the Express server gets a request,
// it calls your callback and gives it two values:
// - The request
// - The response
// The response object has a bunch of methods
// for sending response back to the client.
app.get("/", (request, response) => {
  response.send("hi there");
});

// A required method to use on your server. It lets you open up the server to requests.
// Takes two arguments:
// - a number for the port to listen on.
// - a function to call back when the server is up and running.
// run a console log in callback to let us know it worked.
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get("/tim-gunn", (request, response) => {
  response.send("Make it work");
});

app.get("/Emeril", (request, response) => {
  response.send("Bam!");
});

app.get("/Steve-McGarrett", (request, response) => {
  response.send("Book'em Danno!");
});

app.get("/Coach-Taylor", (request, response) => {
  response.send("Clear eyes, full hearts, can't Lose");
});

app.get("/Homer-Simpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/Bruce-Banner", (request, response) => {
  response.send("Don't make me angry");
});

app.get("/JJ-Evans", (request, response) => {
  response.send("Dy-no-myte!");
});

app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/Hannibal-Smith", (request, response) => {
  response.send("I love it when a plan comes together");
});
