const express = require("express");
const app = express();
const PORT = 3003;

app.get("/", (request, response) => {
  response.send("home");
});
app.get("/terminator", (request, response) => {
  response.send("hasta vista");
  response.send("hasta two");
});

const characters = {
  "Hannibal Smith": "I love it when a plan comes together",

  "Harry Callahan": "Go ahead, make my day",

  "Travis Bickle": "You Talking to Me?",

  "Frankenstein": "Its alive",

  "Jim Lovell": "Houston we have a problem",
};

app.get("/characters/:name", (req, res) => {
  const {name} = req.params;
console.log(name.toUpperCase())
  if (characters[name]) {
    res.send(characters[name]);
  } else {
    res.send("cannot find anything");
  }
});

const fortunes = [
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
  "Very doubtful",
];

app.get("/magic8", (req, res) => {
  let randomFortune = Math.floor(Math.random() * fortunes.length);

  res.send(`<h1>${fortunes[randomFortune]}</h1>`);
});

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});
