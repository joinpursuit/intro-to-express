// DEPENDENCIES
import express from "express";

// CONFIGURATION
const app = express();

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

// ROUTES
app.get("/",(req, res) => {
    res.send("Hello World!!")
})

app.get("/terminator",(req,res)=> {
    res.send(`I'll be back <br> Hasta la vista, baby`);
    // res.send("Hasta la vista, baby")
})

app.get("/Timgunn", (req, res) => {
    res.send('Make it work')
  })

app.get("/Emeril", (req, res) => {
    res.send("Bam!");
})

app.get("/stevemcGarrett",(req,res) => {
    res.send("Book 'em Danno!")
})

app.get("/CoachTaylor",(req,res) => {
    res.send('Clear eyes, full hearts, can\'t Lose!')
})

app.get("/Homer-Simpson",(req,res) => {
    res.send("D'Oh")
})

app.get("/BRUCEbanner",(req, res) => {
    res.send("Don't make me angry")
})

app.get("/JJ-Evans", (req, res) => {
    res.send("Dy-no-myte!")
})

app.get("/Batman", (req, res)=> {
    res.send("To the Batmobile!")
})

app.get("/Regis", (req, res) => {
    res.send("Is that your final answer?")
})

app.get("/Dorothy",(req, res)=> {
    res.send('Toto, I\'ve got a feeling we\'re not in Knansas anymore')
})

let randomResponse = magic8Responses[Math.floor(Math.random()* magic8Responses.length)];

app.get("/magic8",(req, res)=> {
    res.send(`<h1>${randomResponse}</h1>`)
})

// LISTEN
app.listen(3003,() => {
    console.log("Listening on port 3003");
})

