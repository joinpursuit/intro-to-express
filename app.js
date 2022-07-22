const express = require('express');
const app = express();
const port = 3003;

const magic8Responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - Definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes, and signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

app.get('/', (req, res) => {
  res.send('Hello nice World!');
});

app.get('/universe', (request, response) => {
  response.send('Hello universe!');
});

app.get('/Regis', (req, res) => {
  res.send('Is that your final answer?');
});

app.get('/Batman', (req, res) => {
  res.send('To the batmobile!');
});

app.get('/james-bond', (req, res) => {
  res.send('the name is Bond, James Bond');
});

app.get('/frankenstein', (req, res) => {
  res.send('Its ALive! Its Alive!');
});

app.get('/rocky', (req, res) => {
  res.send('Yo Adrian!');
});

app.get('/terminator', (request, response) => {
  response.send("I'll be back");
  // response.send('Hasta la vista, baby');
});

app.get('/mets', (req, res) => {
  res.send('LFGM!');
});

app.get('/magic8', (req, res) => {
  let magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(`<h1>${magic8Answer}</h1>`);
});

app.listen(port, () => {
  console.log('It is Alive!');
});
