const { request } = require("express");
const { response } = require("express");
const express = require("express");
const supertest = require("supertest")
const app = express();
const app2 = require("../app.js")

// / DEPENDENCIES
// const express = require('express')


// CONFIGURATION
// const PORT = 3003


// ROUTES
app.get('/', (request, response) => {
    response.send('Hello, world')
})

// LISTEN
// app.listen(PORT, ()=> {
//     console.log(`listening on port ${PORT}`)
// })


app.get("/brooklyn", (request, response) => {
    response.send("Where Brooklyn at?")
});
app.get("/terminator",(request,response) => {
    response.send("I'll be back, Hasta la vista, baby")
})

app.get("/tim-gunn",(request,response) => {
    response.send("Make it work")
})

app.get("/Fox-Mulder",(request,response) => {
    response.send("The truth is out there")
})
app.get("/Dorothy",(request,response) => {
    response.send("Toto I've got a feeling we are not in Kansas anymore")
})
app.get("/Jack-Dawson",(request,response) => {
    response.send("I'm king of the world")
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
app.get("/magic8",(request,response) => {
    // can also put the array inside the request/response
      let phrase = magic8Responses[Math.floor(Math.random()*magic8Responses.length)];
    response.send(`<h1>${phrase}</h1>`)
})




// EXPORT
module.exports = app