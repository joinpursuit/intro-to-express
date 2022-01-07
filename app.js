const express = require("express");
const app = express();
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

app.get("/", (request, response)=>{
    console.log("Get request to root path");
    response.send("This is the root path")
});

app.get("/terminator", (request, response)=>{
    console.log("Get response from terminator path");
    response.send("I\'ll be back")
});

app.get("/tim/gunn", (request,response)=>{
    console.log("Get response from nested /tim/gunn");
    response.send("Make it work tim/gunn")
});

app.get("/magic8", (request, response)=>{
    const randomIndex = Math.floor(Math.random()* magic8Responses.length)
    console.log(`Random magic8 responses index ${randomIndex}`);
    
    // response.send(`${magic8Responses[Math.floor(Math.random()* magic8Responses.length)]}`)
    response.send(`<h1>${magic8Responses[randomIndex]}<h1>`)
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
});