const express = require("express");
const app = express();
const PORT = 3333


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
// const getRandom = (array) => {
//     return Math.floor(Math.random() * array.length)
// }
app.get("/", (request, response) => {
    response.send("Hello, World!")
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back")
    // response.send('Hasta la vista, baby')
});

app.get("/yogiberra", (request, response) => {
    response.send("It ain't over till its over.")
});

app.get("/biggie", (request, response) => {
    response.send("And if you don't know now you know!")
});

app.get("/yogiberra", (request, response) => {
    response.send("It ain't over till its over.")
});

app.get("/donkey", (request, response) => {
    response.send("I'm making waffles!")
});

app.get("/lionking", (request, response) => {
    response.send("Hakuna Matata.")
});

app.get("/findingnemo", (request, response) => {
    response.send("Nemo touched the butt!")
});

app.get("/smokey", (request, response) => {
    response.send("And you know this man!")
});

app.get("/babyboy", (request, response) => {
    response.send("Thats right, call your mommma.")
});

app.get("/rushhour", (request, response) => {
    response.send("Leeee!")
});

app.get("/magic8", (request, response) => {
    response.send(`<h1>${magic8Responses[Math.floor(Math.random() * 20)]}</h1>`)
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})