const { response } = require('express');
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
  
  ];

app.get('/terminator', (request, response) => {
    response.send(`I'll be back. Hasta la vista, baby`)
});

app.get('/emeril', (request, response) => {
    response.send('Bam!');
});

app.get('/Steve-McGarrett', (request, response) => {
    response.send(`Book'em Danno!`);
});

app.get('/CoachTaylor', (request, response) => {
    response.send(`Clear eyes, full hearts, can't Lose`);
});

app.get('/HomerSimposn', (request, response) => {
    response.send(`D'Oh`);
});

app.get('/brucebanner', (request, response) => {
    response.send(`Don't make me angry`);
});

app.get('/jjevans', (request, response) => {
    response.send(`Dy-no-myte`);
});

app.get('/batman', (request, response) => {
    response.send(`To the Batmobile!`);
});

app.get('/hannibalsmith', (request, response) => {
    response.send(`I love it when a plan comes together`);
});

app.get('/Fraiser', (request, response) => {
    response.send(`I'm listening`);
});


app.get('/magic8', (request, response) => {
    response.send(magic8Responses[Math.floor(Math.random()*(magic8Responses.length - 0 + 1) + 0)])
});

app.listen(3003)