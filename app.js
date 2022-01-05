const { response } = require("express");
const express = require("express");

const app = express();
const PORT = 3003;

//when we get this request ('/')
//then do this function
app.get("/", (request, response) => {
  response.send("Yellow World");
});

app.get("/terminator", (request, response) => {
  response.send("Make it work.");
});

app.get("/bruce-banner", (request, response) => {
  response.send("Don't make me angry.");
});

app.get("/borg", (request, response) => {
  response.send("Resistance is futile.");
});

app.get("/zeus", (request, response) => {
  response.send("Release the Kraken.");
});

app.get("/rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/gollum", (request, response) => {
  response.send("My precious");
});

app.get("/james-bond", (request, response) => {
  response.send("The name is Bond, James Bond.");
});

app.get("/Jim-Lovell", (request, response) => {
  response.send("Houston, we have a problem.");
});

app.get("/Jack_Dawson", (request, response) => {
  response.send("I'm King of the world!");
});

app.get("/Homer-Simpson", (request, response) => {
  response.send("D'Oh");
});

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
