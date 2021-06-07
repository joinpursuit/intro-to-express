const express = require("express");
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

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})

app.get("/terminator2", (req, res) => {
    res.send("Hasta la vista, baby")
})

app.get("/Coach-Taylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
})

app.get("/Homer-Simpson", (req, res) => {
    res.send("D'Oh")
})

app.get("/Batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/Harry-Callahan", (req, res) => {
    res.send("Go ahead, make my day")
})

app.get("/Gollum", (req, res) => {
    res.send("My precious")
})

app.get("/Frankenstein", (req, res) => {
    res.send("It's alive! It's alive")
})

app.get("/Jim-Lovell", (req, res) => {
    res.send("Houston, we have a problem")
})

app.get("/Dorothy", (req, res) => {
    res.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get("/Fox-Mulder", (req, res) => {
    res.send("The truth is out there")
})

app.get("/magic8", (req, res) => {
    const randomQuote = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${randomQuote}</h1>`)
})

app.listen(PORT)