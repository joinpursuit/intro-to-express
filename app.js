//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();
const PORT = 3000


//ROUTES
app.get("/magic8", (req, res) => {
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

    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.status(200).send(`<h1>${magic8Answer}</h1>`)
})


//Catchphrases
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})

app.get("/terminator", (req, res) => {
    res.status(200).send("I'll be back!");
})

app.get("/terminator2", (req, res) => {
    res.status(200).send('Hasta la vista, baby');
})

app.get("/Emeril", (req, res) => {
    res.status(200).send("Bam!");
})

app.get("/SteveMcGarrett", (req, res) => {
    res.status(200).send("Book 'em Danno!");
})

app.get("/CoachTaylor", (req, res) => {
    res.status(200).send("Clear eyes, full hearts, can't Lose");
})

app.get("/HomerSimpson", (req, res) => {
    res.status(200).send("D'Oh");
})

app.get("/BruceBanner", (req, res) => {
    res.status(200).send("Don't make me angry");
})

app.get("/JJEvans", (req, res) => {
    res.status(200).send("Dy-no-myte!");
})

app.get("/Batman", (req, res) => {
    res.status(200).send("To the Batmobile!");
})

app.get("/HannibalSmith", (req, res) => {
    res.status(200).send("I love it when a plan comes together");
})

app.get("/magic8", (req, res) => {
    res.status(200).send("I love it when a plan comes together");
})


//LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

//EXPORT
module.exports = app;