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
  res.send( `<h1 style="color:green;" >Hello Earthlings</h1>  <img src='https://media2.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif' alt='aliens'></img>"`);
});

app.get('/universe', (request, response) => {
  response.send("<h1>It's so VAST!</h1> <img src='https://media2.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif' alt='vast'></img>");
});

app.get('/Rick', (req, res) => {
  res.send(
    `<h1 style="background-color:#2765c2;" >Don\'t move. Gonorrhea can\'t see us if we don\'t move. Wait! I was wrong! I was thinking of a T. rex.</h1> <img src='https://media3.giphy.com/media/d95FpbwPrisjgL2lCR/giphy.gif' alt='rick'</img>`,
  );
});

app.get('/Morty', (req, res) => {
  res.send(
    `<h2 style="background-color:#f0e92b;" >Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.</h2> <img src='https://i.gifer.com/SIDZ.gif' alt='morty'</img>`,
  );
});

app.get('/nimbus', (req, res) => {
  res.send(`<h2>Say goodbye to your precious dry land! For soon it will be wet!</h2> <br> <img src='https://media2.giphy.com/media/G49ZNK2Gp7ZtlIpjVh/200.gif' alt='nimbus'</img>"`);
});

app.get('/frankenstein', (req, res) => {
  res.send("<h1 style='color:#132415;'> IT\'S ALIVE! Its Alive!!! <br> <img src='https://media1.giphy.com/media/l3vRlInF7QViJNOow/giphy.gif' alt='frank'</img>");
});

app.get('/beth', (req, res) => {
  res.send(
    "<h1 style='background-color:#c22727;' >Honey, stop raising your father\'s cholesterol so you can take a hot funeral selfie.</h1> <img src='https://media2.giphy.com/media/ZFnwQcep1z6qEdHDue/giphy.gif' alt='beth'</img> ",
  );
});

app.get('/summer', (request, response) => {
  response.send("<h1 style='background-color:#c957b1;'> So what if he\’s the devil, Rick? At least the devil has a job. At least he\’s active in the community</h1> <img src='https://64.media.tumblr.com/4b5031678461b823a7064995d41d1e96/tumblr_q0bahb4zkk1rawb5do1_400.gifv' alt='summer'</img> ");
});

app.get('/jerry', (req, res) => {
  res.send("<h1 style='background-color:#61c957'>He\'s Playing You, Shorty! </h1> <img src='https://c.tenor.com/C--b2mPfzPgAAAAM/climate-change-is-real-lcvearthday.gif' alt='jerry'</img> ");
});

app.get('/magic8', (req, res) => {
  let magic8Answer = magic8Responses[Math.floor(Math.random() * 19)];
  res.send(`<h1 style="color:#8e57c9" >${magic8Answer}</h1> <img src='https://c.tenor.com/C--b2mPfzPgAAAAM/climate-change-is-real-lcvearthday.gif' alt='magic'</img>`);
});

app.listen(port, () => {
  console.log('It\'s WORKING!');
});