const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Adnan")
})
app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    // res.send("Hasta la vista, baby")

})
app.get("/stevemcgarret", (req, res) => {
    res.send("Book 'em Danno")
})
app.get("/emeril", (req, res) => {
    res.send("Bam")
})
app.get("/brucebanner", (req, res) => {
    res.send("Dont make me angry")
})
app.get("/jjevans", (req, res) => {
    res.send("Dy-no-myte")
})
app.get("/batman", (req, res) => {
    res.send("To the Batmobile")
})
app.get("/hannibalsmith", (req, res) => {
    res.send("I love it when a plan comes together")
})
app.get("/fraiser", (req, res) => {
    res.send("I'm listening")
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
    let randomM8 = magic8Responses[Math.floor(Math.random() * 19)];
    res.send(`<h1>${randomM8}</h1>`);
})

// app.listen(3003, () => {
//     // console.log("Here's looking at you, kid")
// });

app.listen(3003);