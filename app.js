const express = require("express");
const app = express();

app.get("/", (req, res)=> {
    res.status(418).send("Hello Client!");
});

app.get("/terminator", (req, res) => {
    res.status(418).send("I'll be back");
    // res.send("Hasta la vista, baby");
});

app.get("/tony-montana", (req, res) => {
    res.status(418).send("Say hello to my little friend");
});

app.get("/king-leonidas", (req, res) => {
    res.status(418).send("This is Sparta!")
})

// Anime catch phrases
app.get("/sailor-moon", (req, res) => {
    res.status(418).send("In the name of the moon I will punish you!");
});

app.get("/yami-yugi", (req, res) => {
    res.status(418).send("It's time to duel!");
});

app.get("/ryoma-echizen", (req, res) => {
    res.status(418).send("Made made dane");
});

app.get("/kenshirou", (req, res) => {
    res.status(418).send("Omae wa mou shindeiru. NANI!?");
});

app.get("/kamina", (req, res) => {
    res.status(418).send("Just who the h*** do you think I am?");
});

app.get("/monkey-d.-luffy", (req, res) => {
    res.status(418).send("I'm going to be the pirate king!");
});

app.get("/mayuri_shiina", (req, res) => {
    res.status(418).send("Tuturuu");
});

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

    res.status(418).send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`)
})


module.exports = app