const express = require("express");

const app = express();

app.listen(3003);

app.get("/", (req, res) => {
    res.send("hello?");
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work');
})

app.get('/timgunn', (req, res) => {
    res.send("Here's looking at you, kid");
})

const people = {
    Emeril: "Bam!",
    "Steve McGarrett": "Book 'em Danno!",
    "Coach Taylor": "Clear eyes, full hearts, can't Lose",
    "Homer Simpson": "D'Oh",
    "Bruce Banner": "Don't make me angry",
    "JJ Evans": "Dy-no-myte!",
    Batman: "To the Batmobile!",
    "Hannibal Smith": "I love it when a plan comes together"
}
app.get("/Emeril", (req, res) => {
    res.send(people.Emeril);
})
app.get("/Steve%20McGarrett", (req, res) => {
    res.send(people["Steve McGarrett"]);
})

let firstResponse = true;
app.get('/terminator', (req, res) => {
    res.send(firstResponse ? 'I\'ll be back' : 'Hasta la vista, baby');
    firstResponse = !firstResponse;
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
app.get("/magic8", (req, res) => {
    const index = Math.floor(Math.random() * magic8Responses.length);
    res.send(`<h1>${magic8Responses[index]}</h1>`);
})

 