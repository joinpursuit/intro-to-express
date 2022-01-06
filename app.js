const express = require("express");

const app = express();

const PORT = 3003;

app.get("/", (request, response) => {
    response.send("Hi There!")
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back!")
});
app.get("/terminator2", (request, response) => {
    response.send("Hasta la vista, baby")
});

app.get("/homer-simpson", (request, response) => {
    response.send("D'Oh")
});
app.get("/jj-evans", (request, response) => {
    response.send("Dy-no-myte!")
});
app.get("/batman", (request, response) => {
    response.send("To the Batmobile!")
});
app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together")
});
app.get("/jack-dawson", (request, response) => {
    response.send("I'm king of the world!")
});
app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive")
});
app.get("/tony-montana", (request, response) => {
    response.send("Say hello to my little friend")
});
app.get("/dorothy", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
});
app.get("/rod-tidwell", (request, response) => {
    response.send("Show me the money!")
});

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
  let catchPhrase = ''


app.get('/magic8', (request, response) => {
    for (let i = 0; i < magic8Responses.length; i++) {
        catchPhrase = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }
    response.send(catchPhrase)
  })

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
