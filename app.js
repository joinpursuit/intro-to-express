// Dependencies
const express = require('express')

// Config
const app = express()

// Data
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

// Helper func
function getIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/terminator', (req, res) => {
  res.send('I\ll be back')
  //res.send('Hasta la vista, baby')
})
app.get('/emeril', (req, res) => {
  res.send('Bam!')
})
app.get('/magic8', (req, res) => {
  res.send(`<h1>${magic8Responses[getIndex(0, magic8Responses.length-1)]}</h1>`)
})

// Export
module.exports = app