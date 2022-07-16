const express = require('express');

const app = express()
const PORT = 3003

app.get('/tim-gunn', (req, res) => {
    res.send("Make it work");
  })

app.get('/emeril', (req, res) => {
    res.send("Bam!");
  })
app.get('/steve-mcgarrett' , (req, res) => {
    res.send("Book 'em Danno!")
  })
app.get('/coach-taylor', (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
  })
app.get('/Homer-Simpson', (req, res) => {
    res.send("D'oh!");
  })
app.get('/Bruce-Banner', (req, res) => {
    res.send("Don't make me angry");
  })
app.get('/JJ-Evans', (req, res) => {
    res.send("Dy-no-myte!");
  })
app.get('/Batman', (req, res) => {
    res.send("To the Batmobile!");
  })
app.get('/Hannibal:Smith', (req, res) => {//tried a different symbol between the First and last name
    res.send("I love it when a plan comes together");
  })
app.get('/Fraiser', (req, res) => {
    res.send("I'm lestening!");
  })
app.get('/Regis', (req, res) => {
    res.send("Is that your final answer?");
  })
app.get('/borg', (req, res) => {
    res.send("Resistance is futile");
  })
app.get('/Fox-Mulder', (req, res) => {
    res.send("The truth is out there");
  })
app.get('/Harry&Callahan', (req, res) => {//tried a different symbol between the First and last name
    res.send("Go ahead, make my day");
  })
app.get('/Travis-Bickle', (req, res) => {
    res.send("You talkin' to me?");
  })
app.get('/Tony-Motana', (req, res) => {
    res.send("Say hello to my little friend");
  })
app.get('/Zeus', (req, res) => {
    res.send("Release the Kraken");
  })
app.get('/James-bond', (req, res) => {
    res.send('the name is Bond, James Bond');
  })
app.get('/Dorothy', (req, res) => {
    res.send("Toto, I've got a feeling we're not in Kansas anymore");
  })
app.get('/Rod/Tidwell', (req, res) => {
    res.send("Show me the money!!");
  })
app.get('/Frankenstein', (req, res) => {
    res.send("It's alive! It's alive!");
  })
app.get('/Jim:Lovell ', (req, res) => {
    res.send("Houston, we have a problem");
  })
app.get('/Rocky', (req, res) => {
    res.send("Yo, Adrian");
  })
app.get('/Gollum', (req, res) => {
    res.send("My precious");
  })
app.get('/Jack-Dawson', (req, res) => {
    res.send("I'm king of the world!");
  })
app.get('/terminator', (req, res) => {
    res.send('"Ill be back", "Hasta la vista, baby"');
  })

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
const magic8Reply = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  
 app.get('/magic8', (req, res) => {
    res.send(magic8Reply)
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
})

// EXPORT
module.exports = app