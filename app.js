const express = require("express");
const app = express();

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/terminator2", (request, response) => {
  response.send("Hasta la vista, baby");
});

app.get("/Emeril", (request, response) => {
  response.send("Bam!");
});

app.get("/SteveMcGarrett", (request, response) => {
  response.send("Book'em Danno!");
});

app.get("/CoachTaylor", (request, response) => {
  response.send("Clear eyes, full hearts, cant' Lose");
});

app.get("/HomerSimpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/Fraiser", (request, response) => {
  response.send("I'm Listening");
});

app.get("/Regis", (request, response) => {
  response.send("Is that your final answer?");
});

app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/Zeus", (request, response) => {
  response.send("Release the Kraken!");
});

app.get("/Rocky", (request, response) => {
  response.send("Yo, Adrian");
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
  "Very doubtful",
];

app.get("/magic8", (request, response) => {
  const magic8Answer =
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  response.send(`<h1>${magic8Answer}</h1>`);
  console.log(request);
  });


app.listen(3003);

// What happens if you try to create a URL /Steve McGarrett?
// We get "Cannot GET /steve%20McGarrett"

// Is there a difference between /stevemcgarrett and SteveMcGarrett?
// No difference loads the same comment

// Is there a difference between Steve/McGarrett?
// You have to add the / between or else you will get Cannot GET /SteveMcGarrett

// If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?
// you either have to use "" or \\ before and after the ' if using ''

// What do you see in your browser?
// We see the first message of (I'll be Back!)
