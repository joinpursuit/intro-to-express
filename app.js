const express = require('express')

const app = express()
const PORT = 3003


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

app.get('/', (request, response) => {
    response.send('Hello world!')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


app.get('/Emeril', (req, res) => {
    res.send('Bam!')
})

app.get('/Steve McGarrett', (req, res) => {
  res.send('Book em Danno!')
}) 


app.get('/Coach Taylor', (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose")
})

app.get('/Homer Simpson', (req, res) => {
    res.send("D'Oh")
})

app.get('/Bruce Banner ', (req, res) => {
  res.send("Don't make me angry")
})

app.get('/JJ Evans ', (req, res) => {
  res.send('Dy-no-myte!')
})

app.get('/Batman ', (req, res) => {
  res.send('To the Batmobile!')
})

app.get('/Hannibal Smith', (req, res) => {
  res.send(' I love it when a plan comes together')
})

app.get('/Fraiser ', (req, res) => {
  res.send("I'm listening")
})

app.get('/terminator2', (req, res) => {
  res.send('Ill be back')
  res.send('Hasta la vista, baby')
})

app.get('/magic8', (req, res) => {
  res.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  )
})


