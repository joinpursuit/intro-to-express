const express = require('express');
const app = express();
const port = 3000;

const magic8Responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - Definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Comeback and Try again',
  "Don't count on it",
  'My reply is no',
  'My sources say no, but they also said Pluto was a Planet',
  'Outlook not so good',
  'Very doubtful',
  'Yes, But do it Drunk',
  'Do What Jesus Would DO! Die at the age of 33',
  'And Yes Trump uses me when deciding to go to war',
];

app.get('/', (req, res) => {
  res.send( ' <h1 style="color:green;" >Hello Earthlings</h1>');
});

app.get('/universe', (request, response) => {
  response.send("It's so VAST!");
});

app.get('/Rick', (req, res) => {
  res.send(
    '<h1 style="background-color:#2765c2;" >Don\'t move. Gonorrhea can\'t see us if we don\'t move. Wait! I was wrong! I was thinking of a T. rex.</h1>',
  );
});

app.get('/Morty', (req, res) => {
  res.send(
    '<h2 style="background-color:#f0e92b;" >Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.</h2>',
  );
});

app.get('/mr.nimbus', (req, res) => {
  res.send(`<h2>Say goodbye to your precious dry land! For soon it will be wet!</h2>`);
});

app.get('/frankenstein', (req, res) => {
  res.send('Its ALive! Its Alive!');
});

app.get('/beth', (req, res) => {
  res.send(
    '<h1 style="background-color:#c22727;" >Honey, stop raising your father\'s cholesterol so you can take a hot funeral selfie.</h1>',
  );
});

app.get('/summer', (request, response) => {
  response.send('<h1 style="background-color:#c957b1;"> So what if he’s the devil, Rick? At least the devil has a job. At least he’s active in the community</h1>');
});

app.get('/jerry', (req, res) => {
  res.send('<h1 style="background-color:#61c957" >He\'s Playing You, Shorty!</h1>');
});

app.get('/magic8', (req, res) => {
  let magic8Answer = magic8Responses[Math.floor(Math.random() * 19)];
  res.send(`<h1 style="color:#8e57c9" >${magic8Answer}</h1>`);
});

app.listen(port, () => {
  console.log('It\'s WORKING!');
});
