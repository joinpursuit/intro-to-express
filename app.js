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
app.get("/homer-simpson", (response, request) => {
    response.send("D'oh")
})

// Bruce Banner - Don't make me angry
app.get("/bruce-banner", (response, request) => {
    response.send("Don't make me angry")
})