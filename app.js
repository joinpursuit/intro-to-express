const express = require("express")

const app = express()

app.get("/terminator", (request, response) => {
    response.send("I'll be back")
    response.send('Hasta la vista, baby')
})

app.get("/timgunn", (req, res) => {
    res.send('Make it work')
})

app.get('/hello', (req, res) => {
    res.send("Here\'s looking at you, kid")
})

app.get('/emeril', (req, res) => {
    res.send("BAM!!!")
})

app.get('/zeus', (req, res) => {
    res.send('Release the Kraken')
})

app.get('/rocky', (req, res) => {
    res.send("Yo, Adrian")
})

app.get("/gollum", (req, res) => {
    res.send("My precious!!")
})

app.get('/fraiser', (req, res) => {
    res.send('I\'m listening')
})

app.get("/regis", (req, res) => {
    res.send("Is that your final answer?")
})

app.get("/batman", (req, res) => {
    res.send("To the Batmobile")
})

app.get("/borg", (req, res) => {
    res.send("Resistance is futile")
})

app.get("/dorothy", (req, res) => {
    res.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get("/frankenstein", (req, res) => {
    res.send("It's alive! It's alive!")
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

app.get('/magic8', (req, res) => {
//let random = Math.random() * (magic8Responses.length - 1) + magic8Responses.length;
let random = Math.floor(Math.random() * magic8Responses.length)
let randomResponse = magic8Responses[random]


res.send(`<h1>${randomResponse}</h1>`)
})

app.listen(3001)