const { request } = require("express");
const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (request, response)=>{
    console.log("Get request to root path");
    response.send("<h1>Bite Me 🌮</h1>");
});

app.get("/terminator", (request, response)=>{
    response.send("I'll be back" + ". " + "Hasta la vista, baby!");
})

app.get("/tim-gunn", (request, response)=> {
    response.send("Make it work");
})

app.get("/batman", (request, response)=> {
    response.send("To the Batmobile!");
})

app.get("/homer-simpson", (request, response)=> {
    response.send("D'Oh");
})

app.get("/jj-evans", (request, response)=> {
    response.send("Dy-no-myte!");
})

app.get("/tony-montana", (request, response)=> {
    response.send("Say hello to my little friend");
})

app.get("/dorothy", (request, response)=> {
    response.send("Toto, I've got a feeling we're not in Kansas anymore");
})

app.get("/gollum", (request, response)=> {
    response.send("My precious");
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

    app.get("/magic8", (request, response)=> {
        const magic8items  = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
        response.send(`<h1> ${ magic8items } </h1>`)
   })


  const PORT = process.env.PORT;

  app.listen(PORT, ()=> {
    console.log('listening on port ${PORT}')
  });