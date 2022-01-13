// import express
const express = require("express");
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

app.get("/terminator",(request, response)=>{
    // response.send("I'll be back");
    response.send("Hasta la vista, baby");
})

app.get("/emeril",(request, response)=>{
    response.send("Bam!");
})

app.get("/jjevans",(request, response)=>{
    response.send("Dy-no-myte!");
})

app.get("/batman",(request, response)=>{
    response.send("To the Batmobile!");
})

app.get("/fraiser",(request, response)=>{
    response.send("I'm listening");
})

app.get("/regis",(request, response)=>{
    response.send("Is that your final answer?");
})

app.get("/borg",(request, response)=>{
    response.send("Resistance is futile");
})

app.get("/foxmulder",(request, response)=>{
    response.send("The truth is out there");
})

app.get("/rocky",(request, response)=>{
    response.send("Yo, Adrian");
})

app.get("/magic8",(request, response)=>{
    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
    response.send(`<h1>${magic8Answer}<h1>`);
})

app.listen(3003);