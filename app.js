const express = require("express");
const app = express();
const PORT = 3003;

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

// route
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
  // res.send("Let's cook")
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
});

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});

////////////// Magic 8 Ball ///////////

//   app.get("/magic8", (req, res) => {
//     const random = Math.floor(Math.random() * (magic8Responses.length -1))
//     console.log(random)
//     res.send(magic8Responses[random])
// } )

app.get("/magic8", (req, res) => {
  const random =
    magic8Responses[Math.floor(Math.random() * (magic8Responses.length - 1))];
  res.send(`<h1>
        ${random}
    </h1>`);
});
