const express = require('express');
const app = express();
const supertest = require('supertest');



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
  app.get('/tim-gunn', (req, res) => {
      res.send("Make it work")
  })

  app.get('/magic8', (req, res) => {
    
    res.status(200).send(`<h1>${magic8Responses[Math.floor(Math.random() * 8) + 1]}</h1>`)
})

app.get('/terminator', (req, res) => {
    res.send('Hasta la vista, baby')
    res.send("I'll be back")
})


app.get('/time-machine', (req, res) => {
    res.send("Future self")
})

app.get('/Emeril', (req, res) => {
    res.send("Bam!")
})

app.get('/SteveMcGarrett', (req, res) => {
    res.send("Book'em Danno")
})

app.get('/Batman', (req, res) => {
    res.send("To the Batmobile!")
})

app.get('/Fraiser', (req, res) => {
    res.send("I'm listening")
})

app.get('/ZEUS', (req, res) => {
    res.send("Release the Kraken")
})

app.get('/Jack-Dawson', (req, res) => {
    res.send('I\'m the king of the world!')
})
app.listen(3003)

module.exports = app

