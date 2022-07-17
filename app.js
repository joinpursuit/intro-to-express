const express = require("express");
const app = express();
const PORT = 3003

// ROUTES
app.get("/terminator", (request, response) => {
    response.send("I'll be back")
    response.send("Hasta la vista, baby")
});

app.get("/james-bond", (request, response) => {
    response.send("the name is Bond, James Bond")
})

app.get("/rocky", (request, response) => {
    response.send("Yo, Adrian")
})

app.get("/gollum", (request, response) => {
    response.send("My precious")
})

app.get("/rod-tidwell", (request, response) => {
    response.send("Show me the momey!")
})

app.get("/frankenstein", (request, response) => {
    response.send("Show me the money!")
})

app.get("/zeus", (request, response) => {
    response.send("Release the Kraken")
})

app.get("/borg", (request, response) => {
    response.send("Resistance is futile")
})

app.get("/fraiser", (request, response) => {
    response.send("I'm listening")
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

  
  
  app.get("/magic8responses", (request, response) => {
    const magic8Answer = Math.floor(Math.random() * magic8Responses.length);
    response.send(`<h1>${magic8Responses[magic8Answer]}<h1>`)
  })

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
