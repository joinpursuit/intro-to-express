const express = require ("express");
const app = express();

app.get("/terminator", (repueste, response) => {
     response.send("I'll be back")
    //  response.send('Hasta la vista, baby')
     
    })
    
app.get("/Emeril", (repueste, response) => {
    response.send("Bam!")
    })

app.get("/SteveMcGarrett", (repueste, response) => {
response.send("Book 'em Danno!")
})

app.get("/Coach-Taylor", (repueste, response) => {
response.send("Here's looking at you, kid")
})

app.get("/HomerSimpson", (repueste, response) => {
response.send("D'Oh")
})

app.get("/Fraiser", (repueste, response) => {
response.send(" I'm listening")
})

app.get("/Regis", (repueste, response) => {
response.send("Is that your final answer?")
})

app.get("/Batman", (repueste, response) => {
response.send("To the Batmobile!")
})

app.get("/Zeus ", (repueste, response) => {
response.send("Release the Kraken")
})

app.get("/Rocky", (repueste, response) => {
response.send("Yo, Adrian")
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


  
app.get("/magic8",(request, response)=>{
    const magic8Answer = magic8Responses[Math.floor(Math.random()* magic8Responses.length)]
    response.send(`<h1>${magic8Answer}</h1>`)
})
app.listen(3003)



