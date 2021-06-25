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
Math.random() * magic8Responses.length

app.get("/terminator",(request,response)=>{
    response.send("I'll be back")
    
})
app.get("/homersimpson",(request,response)=>{
    response.send("D'oh")
})
app.get("/jamesbond",(request,response)=>{
    response.send("The name is Bond, James Bond")
})
app.get("/dorothy",(request,response)=>{
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
})
app.get("/rodtidwell",(request,response)=>{
    response.send("Show me the money!")
})
app.get("/tonymontana",(request,response)=>{
    response.send("Say hello to my little friend")
})
app.get("/travisbickle",(request,response)=>{
    response.send("You talkin' to me?")
})
app.get("/regis",(request,response)=>{
    response.send("Is that your final answer?")
})

app.get("/zeus", (request, response))=>{
    response.send("Release the Kraken")
}
app.listen(3003)