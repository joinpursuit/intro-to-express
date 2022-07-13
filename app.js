const express = require('express');


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
  "Very doubtful"
]
const magic8Answer =
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

//ROUTES
app.get('/', (request, response) => {
  response.send("Hello 8.4!!")
});

app.get('/Terminator', (request, response) => {
  response.send("I'll be back")
});

app.get('/Coach-Taylor', (request, response) => {
  response.send("Clear eyes, full hearts, can't Lose")
});

app.get('/Tony-Montana', (request, response) => {
  response.send("Say hello to my little friend")
});

app.get('/James-Bond', (request, response) => {
  response.send("the name is Bond, James Bond")
});

app.get('/Batman', (request, response) => {
  response.send("To the Batmobile!")
});

app.get('/Paulie', (request, response) => {
  response.send("Cabs are here!")
});

app.get('/Vinnie', (request, response) => {
  response.send("T-Shirt Time!!")
});

app.get('/Weakest-Link', (request, response) => {
  response.send("You are the weakest link, goodbye")
});

app.get('/Captain-America', (request, response) => {
  response.send("I can do this all day")
});

app.get('/Obi-Wan', (request, response) => {
  response.send("Its over Anakin, I have the high-ground!")
});

app.get('/magic8', (request, response) => {
  response.send(`<h1>${magic8Answer}</h1>`)
});



module.exports = app