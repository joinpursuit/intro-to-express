const { response } = require("express")
const express = require("express")

const app = express()

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

app.get("/magic8", (request, response)=>{
    let magic8Answer = magic8Responses[(Math.random() * magic8Responses.length) | 0]
    response.send(`<h1>${magic8Answer}</h1>`)
})

app.get("/", (request, response)=>{
    response.send("Home path. Hello!")
})

app.get("/terminator", (request, response) =>{
    console.log("Get request to root path")
    response.send("Hasta la vista, baby")
})

app.get("/emeril", (request, response) =>{
    response.send("Bam!")
})

app.get("/SteveMcGarrett", (request, response) =>{
    response.send("Book 'em Danno!")
})

app.get("/CoachTaylor", (request, response) =>{
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get("/HomerSimpson", (request, response) =>{
    response.send("D'Oh")
})

app.get("/BruceBanner", (request, response) =>{
    response.send("Don't make me angry")
})

app.get("/Zeus", (request, response) =>{
    response.send("Release the Kraken")
})

app.get("/Frankenstein", (request, response)=>{
    response.send("It's Alive!!!!")
})

app.listen(3003, ()=>{
    console.log("listening on port 3003")
})