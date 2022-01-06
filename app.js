const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/terminator', (req, res) => {
    res.send("I'll be back. Hasta la vista, baby. Get to the choppa!")
})

app.get('/borg', (req, res) => {
    res.send("Resistance is futile")
})

app.get('/harry-callahan', (req, res) => {
    res.send("Go ahead, make my day.")
})

app.get('/travis-bickle', (req, res) => {
    res.send("You talkin' to me?")
})

app.get('/tony-montana', (req, res) => {
    res.send("Say hello to my little friend!")
})

app.get('/james-bond', (req, res) => {
    res.send("The name is Bond, James Bond.")
})

app.get('/rod-tidwell', (req, res) => {
    res.send("Show me the money!")
})

app.get('/frankenstein', (req, res) => {
    res.send("It's alive! It's alive!")
})

app.get('/gollum', (req, res) => {
    res.send("My precious!")
})

app.get('/jack-dawson', (req, res) => {
    res.send("I'm king of the world!")
})

app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8Responses[RandomInt()]}</h1>`)
})

app.listen(3003);


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

  function RandomInt() {
    return Math.floor(Math.random() * 19)
  }
  