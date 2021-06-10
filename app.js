const { response } = require("express")
const express = require("express")
const app = express()

app.listen(3003)

app.get("/", (request,response) => {
    response.send("Catchphrases!")
})

app.get("/terminator", (request,response) => {
    response.send("I'll be back")
})

app.get("/terminator-two", (request,response) => {
    response.send('Hasta la vista, baby')
})

app.get("/emeril", (request,response) => {
    response.send("Bam!")
})

app.get("/homer-simpson", (request,response) => {
    response.send("Doh!")
})

app.get("/bruce-banner", (request,response) => {
    response.send("Don't make me angry")
})

app.get("/hannibal-smith", (request,response) => {
    response.send("I love it when a plan comes together")
})

app.get("/batman", (request,response) => {
    response.send("To the Batmobile!")
})

app.get("/frasier", (request,response) => {
    response.send("I'm listening")
})

app.get("/fox-mulder", (request,response) => {
    response.send("The truth is out there")
})

app.get("/zeus", (request,response) => {
    response.send("Release the Kraken")
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

  app.get("/magic8", (request, response) => {
      response.send(`<h1>${magic8Responses[Math.floor(Math.random() * 19)]}</h1>`)
  })