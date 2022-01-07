// DEPENDENCIES
const express = require('express')


// CONFIGURATION
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

];


// ROUTES
app.get('/', (request, response) => {
  response.send('Hello, world!')
})
app.get('/terminator', (request, response) => {
  response.send('I\'ll be back，Hasta la vista, baby')
  // response.send('Hasta la vista, baby')
})
app.get('/stevemcgarrett', (request, response) => {
  response.send('Book \'em Danno!')
})
app.get('/emeril', (request, response) => {
  response.send('Bam!')
})
app.get('/jjevans', (request, response) => {
  response.send('Dy-no-myte!')
})
app.get('/batman', (request, response) => {
  response.send('To the Batmobile!')
})
app.get('/hannibalsmith', (request, response) => {
  response.send('I love it when a plan comes together')
})
app.get('/fraiser', (request, response) => {
  response.send('I\'m listening')
})
app.get('/regis', (request, response) => {
  response.send('Is that your final answer?')
})
app.get('/borg', (request, response) => {
  response.send('Resistance is futile')
})
app.get('/foxmulder', (request, response) => {
  response.send('The truth is out there')
})
app.get('/magic8', (request, response) => {
  const message = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  response.send(`<h1>${message}</h1>`);
})



// LISTEN
app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
})