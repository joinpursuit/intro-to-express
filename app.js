const { response, request } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.status(418).send(`<h1>Hello, World!</h1>`);
});

app.get('/terminator', (request, response) => {
  response.send("I'll be back.");
});

app.get('/terminator2', (request, response) => {
  response.send('Hasta la vista, baby!');
});

app.get('/tim-gunn', (req, res) => {
  res.send('Make it work');
});

app.get('/RodTidwell', (req, res) => {
  res.send('Show me the money!');
});

app.get('/Emeril', (req, res) => {
  res.send('BAM!');
});

app.get('/Batman', (req, res) => {
  res.send('To the Batmobile!');
});

app.get('/Zeus', (req, res) => {
  res.send(`<h1>Release the Kraken</h1>`);
});

app.get('/gollum', (req, res) => {
  res.send(`<h1>My precious</h1>`);
});

app.get('/mlk', (request, response) => {
  response.send(`<h1>I have a dream!</h1>`);
});

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

app.get('/magic8', (request, response) => {
  const indx = Math.floor(Math.random() * magic8Responses.length);
  response.send(`<h1>${magic8Responses[indx]}</h1>`);
});

module.exports = app;
