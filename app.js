const express = require("express");
const app = express();
const PORT = 3003;
const magic8Responses = require("./magic8Responses");

// route
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
  res.send("Let's cook");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/tony-montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
});

app.get("/rocky", (req, res) => {
  res.send("Yo, Adrain");
});

app.get("/gollum", (req, res) => {
  res.send("My precious");
  res.send("the ring!");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/james-bond", (req, res) => {
  res.send("the name is Bond, James Bond");
})

app.get("/magic8", (req, res) => {
  const random = Math.floor(Math.random() * (magic8Responses.length - 1));
  res.send(`<h1>
        ${magic8Responses[random]}
    </h1>`);
});
