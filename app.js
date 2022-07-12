const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello people of the world I am here');
});

app.get('/universe', (req, res) => {
  res.send('hello universe');
});

app.get('/tim-gunn', (req, res) => {
  res.send("Here's looking at you, kid");
});

app.get('/Emeril', (req, res) => {
  res.send('Bam!');
});

app.get('/SteveMcGarrett', (req, res) => {
  res.send("Book 'em Danno!");
});

app.get('/CoachTaylor', (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get('/HomerSimpson', (req, res) => {
  res.send("D'Oh");
});

app.get('/BruceBanner', (req, res) => {
  res.send("Don't make me angry");
});

app.get('/JJEvans', (req, res) => {
  res.send('Dy-no-myte!');
});

app.get('/Batman', (req, res) => {
  res.send('To the Batmobile!');
});

app.get('/HannibalSmith', (req, res) => {
  res.send('I love it when a plan comes together');
});

app.get('/Fraiser', (req, res) => {
  res.send("I'm listening");
});

app.get('/terminator', (req, res) => {
    const response = ["I'll be back", 'Hasta la vista, baby']
    res.send(response[Math.round(Math.random(0,2))])
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

app.get('/magic8', (req, res) => {
    res.send(`<h1 align="center">${magic8Responses[Math.floor(Math.random() * (20 - 0) + 0)]}</h1>`)
});

app.listen(3000, () => {
  console.log('it is alive now');
});

console.log(app);