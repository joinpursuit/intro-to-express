const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (request, response) => {
    response.send("I really love express!")
})

app.get("/Terminator", (request, response) => {
    response.send("I'll be back")
})

app.get("/Fortnite", (request, response) => {
    response.send("Victory Royale")
})

app.get("/Spongebob", (request, response) => {
    response.send("I'm ready!")
})

app.get("/Milo", (request, response) => {
    response.send("Woof Woof")
})

app.get("/Poonam", (request, response) => {
    response.send("Haza!")
})

app.get("/Nina", (request, response) => {
    response.send("Meow!")
})

app.get("/Batman", (request, response) => {
    response.send("To the batmobile!")
})

app.get("/Joker", (request, response) => {
    response.send("Why so serious?")
})

app.get("/Homer", (request, response) => {
    response.send("D'OH")
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

app.get("/Magic8", (request, response) =>{
    response.send(`<h1> ${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]} </h1>`)
})

app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})


app.listen(PORT, () => { console.log("Listening on PORT: ", PORT)});



module.exports = app
