
const express = require('express')

// Configuration
const app = express()
const PORT = 3003


// Routes
app.get('/', (request, response) => {
    response.send('Hello World')
})

app.get('/terminator', (request, response) => {
    response.send(`I'll be back`)
})

app.get('/tim-gunn', (request, response) => {
    response.send('Make it work')
})

app.get('/Emeril', (request, response) => {
    response.send('Bam!')
})

app.get('/magic8', (request, response) => {

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

      let randomPhraseIndex = Math.floor((Math.random() * magic8Responses.length))

     response.send(`<h1>${magic8Responses[randomPhraseIndex]}</h1>`)
})

// Listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

