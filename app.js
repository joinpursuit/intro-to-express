const express = require("express")
let app = express()
const PORT = 3003



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

app.get('/', (request, response) => {
    response.status(418).send("Hello, World!")
})  

app.get("/terminator", (request, response)=>{
    response.send("I'll be back.")
})

app.get("/tim-gunn", (req, res)=>{
    res.send("Make it work.")
})

app.get("/homer-simpson", (req, res)=>{
    res.send("D'Oh.")
})

app.get("/gollum", (req, res)=>{
    res.send("my precious.")
})

app.get("/rod-tidwell", (req, res)=>{
    res.send("Show me the money!")
})

app.get("/james-bond", (req, res)=>{
    res.send("The name is bond, James Bond.")
})

app.get("/fox-mulder", (req, res)=>{
    res.send("The truth is out there.")
})

app.get("/borg", (req, res)=>{
    res.send("Resistance is futile.")
})

app.get("/tony-montana", (req, res)=>{
    res.send("Say hello to my little friend.")
})

app.get("/magic8", (req, res)=>{
    let answer = magic8Responses[Math.floor(Math.random()* magic8Responses.length)]
    res.send(`<h1>${answer}</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

module.exports = app