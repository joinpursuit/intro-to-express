

const express = require("express");
const app = express();
const PORT = 3004;

app.get("/", (req, res) => { res.send("") })

app.get('/terminator', (req, res) => {
    res.send('Hasta la vista, baby')
})

app.get('/TimGunn', (req, res) => {
    res.send("Here's looking at you, kid")
})

app.get('/Emeril', (req, res) => {
    res.send("Bam!")
})
app.get('/SteveMcGarrett', (req, res) => {
    res.send("Book 'em Danno!")
})
app.get('/JJEvans', (req, res) => {
    res.send("Dy-no-myte!")
})
app.get('/TravisBickle ', (req, res) => {
    res.send("You talkin' to me?")
})
app.get('/TimGunn', (req, res) => {
    res.send("Here's looking at you, kid")
})

app.get('/Frankenstein', (req, res) => {
    res.send("It's alive! It's alive")
})
app.get('/JackDawson', (req, res) => {
    res.send("I'm king of the world!")
})
app.get('/Rocky', (req, res) => {
    res.send("Yo, Adrian")
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
    let randomNumber = Math.floor(Math.random() * magic8Responses.length)
    res.send(`<h1>${magic8Responses[randomNumber]}<h1>`)
})

app.listen(PORT, () => {
    console.log("I am listening for requests on port " + PORT);
});

module.exports = app