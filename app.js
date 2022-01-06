const { response } = require("express")
const express = require("express")

const app = express()

const PORT = 3003

app.get("/", (request, response) =>  {
    response.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

// Activity Catchphrases Express

// Tim Gunn - Make it work
app.get("/tim-gunn", (request, response) => {
    response.send("Make it work")
})

// Emeril - Bam!
app.get("/emril", (request, response) => {
    response.send("Bam!")
})

// Steve McGarrett - Book 'em Danno!
app.get("/steve-mcgarret", (request, response) => {
    response.send("Book 'em Danno!")
})

// Coach Taylor - Clear eyes, full hearts, can't Lose
app.get("/coach-taylor", (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose")
})

// Homer Simpson - D'Oh
app.get("/homer-simpson", (request, response) => {
    response.send("D'oh")
})

// Bruce Banner - Don't make me angry
app.get("/bruce-banner", (request, response) => {
    response.send("Don't make me angry")
})

// JJ Evans - Dy-no-myte!
app.get("/jj-evans", (request, response) => {
    response.send("Dy-no-myte!")
})

// Batman - To the Batmobile!
app.get("/batman", (request, response) => {
    response.send("To the Batmobile!")
})

// Hannibal Smith - I love it when a plan comes together
app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together")
})

// Fraiser - I'm listening
app.get("/fraiser", (request, response) => {
    response.send("I'm listening")
})

// Activity Magic 8 Ball
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
    const getRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    response.send(getRandom(magic8Responses))
})