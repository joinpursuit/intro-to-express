const { request, response } = require("express")
const express = require("express")
const app = express()


app.get("/terminator", (request, response)=>{
    response.send("I'll be back. Hasta la vista, baby")
    // response.send("Hasta la vista, baby")
})

app.get("/homersimpson",(request, response)=>{
    response.send("D'Oh")
})

app.get("/rodtidwell", (request, response)=>{
    response.send("Show me the money!")
})

app.get("/Dorothy", (request, response)=>{
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get("/JamesBond", (request, response)=>{
    response.send("the name is Bond, James Bond")
})

app.get("/TonyMontana", (request, response)=>{
    response.send("Say hello to my little friend")
})

app.get("/TravisBickle", (request, response)=>{
    response.send("You talkin' to me?")
})

app.get("/Regis", (request, response)=>{
    response.send("Is that your final answer?")
})
app.get("/Zeus", (request, response)=>{
    response.send("Release the Kraken")
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
  
  app.get("/magic8" , (request,response)=>{
      response.send("how")
      console.log(Math.random() * magic8Responses.length)
  })


app.listen(3003)


