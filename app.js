const express = require('express')
const app = express();

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
  res.send('Ill be back');
  
});

app.get('/terminator', (req, res) => {
  res.send('Hasta la vista, baby');
});
app.get('/tim-gunn', (req, res) => {
  res.send('Make it work');
});
app.get('/emeril', (req, res) => {
  res.send('Bam');
});
app.get('/coach-taylor', (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});
app.get('/homer-simpson', (req, res) => {
  res.send("D'Oh");
});
app.get('/borg', (req, res) => {
  res.send('Resistance is futile');
});
app.get('/zeus', (req, res) => {
  res.send('Release the Kraken');
});
app.get('/gollum', (req, res) => {
  res.send('My precious');
});
app.get('/rod tidwell', (req, res) => {
  res.send('Show me the money!');
});

app.get('/magic8', (req, res) => {
  res.send(
    `<h1> ${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

app.listen(3333)

