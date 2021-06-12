const express = require("express");


const app  = express()
const PORT = 3002;
app.listen(PORT, () => { console.log("listening on PORT: ", PORT)})

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

 

app.get("/Terminator", (req, res) => {
    res.send("I'll be back")
})
app.get("/Emeril", (req, res) => {
    res.send("Bam!")
})
app.get("/Tony-Montana", (req, res) => {
    res.send("Say hello to my little friend")
})
app.get("/Homer-Simpson", (req, res) => {
    res.send("D'oh!")
})
app.get("/JJ-Evans", (req, res) => {
    res.send("Dy-no-myte!")
})

app.get("/Frankenstein", (req, res) => {
    res.send("It's alive!")
})
app.get("/Gollum", (req, res) => {
    res.send("My precious")
})
app.get("/Rocky", (req, res) => {
    res.send("Yo, Adrian!")
})
app.get("/Ric-Flair", (req, res) => {
    res.send("Whooooo!")
})
app.get("/James-Bond", (req, res) => {
    res.send("The name's Bond, James Bond")
})
app.get("/Regis", (req, res) => {
    res.send("Is that your final answer?")
})
app.get("/Magic8Ball", (req, res) => {
    const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${randomResponse}</h1>`)
})


