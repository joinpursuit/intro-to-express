const express = require("express");
const app = express();
const PORT = 3001;

// app.get("/", (req, res) => {
//     res.send("This is our first express lab!")
// })

app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
})

app.get("/MasterChief", (req, res) => {
    res.send("Wake me, when you need me")
})

app.get("/CaptainPrice", (req, res) => {
    res.send("Bravo Six, Going Dark")
})

app.get("/Mario", (req, res) => {
    res.send("It's a-me, Marioo!")
})

app.get("/IronMan", (req, res) => {
    res.send("And I'm... Iron Man")
})

app.get("/Nike", (req, res) => {
    res.send("Just do it!")
})

app.get("/MikeBreen", (req, res) => {
    res.send("BANG!")
})

app.get("/RayHudson", (req, res) => {
    res.send("Astonishing from the man from Argentina, who is cleaner than Neutrogena!")
})

app.get("/terminator", (req, res) => {
    res.send("Hasta la vista baby <br> Get to the Choppa!")
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
    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${magic8Answer}<h1>`)
})
  

app.listen(PORT, () => { console.log("listening on PORT: ", PORT)});

module.exports = app