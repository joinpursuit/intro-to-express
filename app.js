const express = require("express");

const app = express();

const PORT = 3003;

app.get("/", (request, response) => {
  response.send("Yooo");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back...");
});

app.get("/tim-gunn", (request, response) => {
  response.send("Make it work");
});

app.get("/homer-simpson", (request, response) => {
  response.send("Mmmm Donuts...");
});

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/bruce-banner", (request, response) => {
  response.send("You won't like me when I'm angry...");
});

app.get("/borg", (request, response) => {
  response.send("Resistance is futile");
});

app.get("/james-bond", (request, response) => {
  response.send("Vodka Martini, shaken not stirred...");
});

app.get("/tony-montana", (request, response) => {
  response.send("Say hello to my little friend");
});

app.get("/rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.listen(PORT, () => {
  console.log(`listen to ${PORT}`);
});
