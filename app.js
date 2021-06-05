const { response } = require("express");
const express =  require("express")
const app = express()
const PORT = 3001;
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



app.listen(PORT, () => {console.log("Listening for requests on Port: ", PORT)})

app.get("/", (req, res) => {
    res.status(200).send("Hello Client!")
})

app.get("/terminator", (request, res) => {
    res.send("I'll be back")
})

app.get("/terminator2", (request, res) => {
    res.send("Hasta la vista, baby")
})

app.get("/timgunn", (req, res) => {
    res.send("Make it work")
})

app.get("/emeril", (req, res) => {
    res.send("Bam!")
})

app.get("/elizabeth", (req, res) => {
    res.send("To be fond of dancing was a certain step towards falling in love")
})

app.get("/miranda", (req, res) => {
    res.send("Is there some reason that my coffee isn't here? Has she died or something")
})

app.get("/obiWan", (req, res) => {
    res.send("You were the chosen one!!!")
})

app.get("/rob", (req, res) => {
    res.send("Billy, it's me Jessica!")
})

app.get("/gollum", (req, res) => {
    res.send("My precious")
})

app.get("/jackDawson", (req, res) => {
    res.send("I'm the King of the World!")
})

app.get("/rick", (req, res) => {
    res.send("I'm pickle Rick!")
})

app.get("/magic8", (req, res) => {
    const randomRes = magic8Responses[Math.floor(magic8Responses.length * Math.random())]
    res.send(`<h1>${randomRes}</h1>`)
})

module.exports = app
