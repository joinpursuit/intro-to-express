const express = require("express");
const app = express();
// const PORT = 3003;

// app.get("/", (req, res) => {
//   res.send("Hello, world!")
// })
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  
});

app.get("/jordan", (request, response) => {
  response.send("Nice!!!");
});

app.get("/jeff", (request, response) => {
  response.send("My name is jeff!!!");
});

app.get("/zeus", (request, response) => {
  response.send("Release the Kraken");
});
app.get("/travisbickle", (request, response) => {
  response.send("You talking to me?");
});
app.get("/regis", (request, response) => {
  response.send("Is that your final answer?");
});
app.get("/rodtidwell", (request, response) => {
  response.send("show me the money!!!");
});
app.get("/fraiser", (request, response) => {
  response.send("I'm listening");
});

app.get("/terminator2", (request, response) => {
  response.send("Hasta la vista, baby!!"); 
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

app.get("/magic8", (request, response) => {
  response.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`); 
});

// app.listen(PORT, () => {
//   console.log("Listening on Port ", PORT);
// });

module.exports = app 