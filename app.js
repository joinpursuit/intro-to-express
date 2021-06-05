const express = require("express");
const app = express();
const PORT = 3003;
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
// const randomResponses = magic8Responses[Math.random() * magic8Responses.length]

  
// app.get("/", (req, res) => {
//     res.send('Hello, world!')
// });

app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
})

app.get("/terminator", (req, res) => {
    res.send("I'll be back. <br /> 'Hasta la vista, baby'")
    
    // res.send('Hasta la vista, baby')
});

app.get("/homer-simpson", (req, res) => {
    res.send("D'Oh")
});
app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
});
app.get("/jim-lovell", (req, res) => {
    res.send("Houston, we have a problem")
});
app.get("/hannibal-smith", (req, res) => {
    res.send("I love it when a plan comes together")
});
app.get("/fraiser", (req, res) => {
    res.send("I'm listening")
});
app.get("/regis", (req, res) => {
    res.send("Is that your final answer?")
});
app.get("/zeus", (req, res) => {
    res.send("Release the Kraken")
});
app.get("/james-bond", (req, res) => {
    res.send("the name is Bond, James Bond")
});
app.get("/frankenstein", (req, res) => {
    res.send("It's alive! It's alive")
});

app.get("/magic8", (req, res) => {
    const randomResponses = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${randomResponses}</h1>`)
});


app.listen(PORT, () => { console.log("listening on PORT: ", PORT) });

module.exports = app