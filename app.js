const express = require('express');

const app = express();
const PORT = 3000;

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
const magic8Answer =
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
console.log(magic8Answer);



app.get('/', (req, res) => {
  res.send('hello there');
});

app.get('/magic8', (req, res) => {
  res.send(`<h1>${magic8Answer}</h1>`);
});

app.get('/Tim-Gunn', (req, res) => {
  res.send('Make it work');
});

app.get('/Emeril', (req, res) => {
  res.send('Bam');
});

app.get('/Gollum', (req, res) => {
  res.send('Yo, Adrian');
});
app.get('/Rocky', (req, res) => {
  res.send('Yo, Adrian');
});

app.get('/Dorothy', (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get('/Zeus', (req, res) => {
  res.send('Release the Kraken');
});

app.get('/JJ-Evans', (req, res) => {
  res.send('Dy-no-myte!');
});
app.get('/Fraiser', (req, res) => {
  res.send("I'm listening");
});
app.get('/Batman', (req, res) => {
  res.send('To the Batmobile!');
});
app.get('/Regis', (req, res) => {
  res.send('Is that your final answer?');
});
app.get('/Borg', (req, res) => {
  res.send('Resistance is futile');
});

app.get('/Frankenstein', (req, res) => {
  res.send(" It's alive! It's alive");
});

app.get('/Steve-McGarrett', (req, res) => {
  res.send(" Book 'em Danno!");
});

app.get('/Bruce-Banner', (req, res) => {
  res.send(" Don't make me angry");
});

app.get('/Homer-Simpson', (req, res) => {
  res.send(" D'Oh");
});

app.get('/Coach-Taylor', (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get('/Hannibal-Smith', (req, res) => {
  res.send('I love it when a plan comes together');
});

app.get('/Fox-Mulder ', (req, res) => {
  res.send('The truth is out there');
});

app.get('/Harry-Callahan', (req, res) => {
  res.send(' Go ahead, make my day');
});

app.get('/Travis-Bickle', (req, res) => {
  res.send('You talking to me?');
});

app.get('/Tony-Montana', (req, res) => {
  res.send('Say hello to my little friend');
});

app.get('/James Bond', (req, res) => {
  res.send('the name is Bond, James Bond');
});

app.get('/Rod-Tidwell', (req, res) => {
  res.send('Show me the money!');
});

app.get('/Jim-Lovell', (req, res) => {
  res.send('Houston, we have a problem');
});

app.get('/Jack-Dawson', (req, res) => {
  res.send(" I'm king of the world!");
});

app.get('/terminator', (req, res) => {
  res.send('Ill be back');
  // res.send('Hasta la vista, baby');
});
// first message receive and error message received
// listening to the port
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// ROUTES
app.get('/', (request, response) => {
  response.status(418).send('Hello, everyone!');
});
// app.get('/', (request, response) => {
//   response.status(200).send('Hello, world!');
// });
app.listen(PORT, () => {
  console.log('listening to the port');
});
// EXPORT
module.exports = app;
