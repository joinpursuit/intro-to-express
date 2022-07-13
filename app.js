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

/**
 * [getIndex() function generates a random index between 0 and array length]
 * @param  {[number]} min [min value equals to the first position]
 * @param  {[number]} max [max value equals to the last position]
 * @return {[number]}     [Number that represents a random index]
 */
function getIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Routes
app.get('/', (req, res) => {
  res.status(200)
  .send('<h1 style="padding: 12rem;margin: 10vh auto;text-align: center;font-size: 8rem;text-decoration: underline;background-color:#0081a7;color: #FFF">Hello, world!</h1>')
})

// Route validating params with logic
app.get('/terminator:id', (req, res) => {
  if (req.params.id === '1') {
    res.send('<h4 style="padding: 12rem;margin: 10vh auto;text-align: center;font-size: 4rem;background-color:#3a86ff;color: #FFF">I\ll be back</h4>') 
  }
  if (req.params.id === '2') {
    res.send('<h4 style="padding: 12rem;margin: 10vh auto;text-align: center;font-size: 4rem;background-color:#ff006e;color: #FFF;">Hasta la vista, baby</h4>')
  }
})

app.get('/emeril', (req, res) => {
  res.send('<p style="padding: 1rem;margin: 33vh auto;display: table;text-align: center;font-size: 4rem;font-weight: bold;color: #f07167;border: 1rem solid #f07167;">Bam!</p>')
})

app.get('/magic8', (req, res) => {
  res.send(`<h1 style="padding: 12rem;margin: 10vh auto;text-align: center;font-size: 4rem;background-color:#118ab2;color: #ffd166;">${magic8Responses[getIndex(0, magic8Responses.length-1)]}</h1>`)
})

// Export
module.exports = app