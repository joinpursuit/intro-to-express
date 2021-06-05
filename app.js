const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});
//ACTIVITY 1
app.get("/sandy", (request, response) => {
  response.send("the ocean is no place for a squirrel");
});
app.get("/britney", (request, response) => {
  response.send("Hit me baby one more time");
});
app.get("/meangirls", (request, response) => {
  response.send("On wednesdays we wear pink");
});
app.get("/bringiton", (request, response) => {
  response.send("That's alright, that's okay, you're gonna pump our gas someday");
});
app.get("/dirtydancing", (request, response) => {
  response.send("Nobody puts baby in the corner");
});
app.get("/hannahmontana", (request, response) => {
  response.send("You get the best of both worlds");
});
app.get("/mamamia", (request, response) => {
  response.send("The best things in life, the very best things happen unexpectedly");
});
app.get("/endgame", (request, response) => {
  response.send("Part of the journey is the end");
});
app.get("/notebook", (request, response) => {
  response.send("I think our love can do anything we want it to");
});
app.get("/twilight", (request, response) => {
  response.send("What if I'm not the hero, what if I'm the bad guy?");
});
//ACTIVITY 2
const magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - Definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes, and signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

app.get("/magic8", (request, response) => {
  let randomRes = Math.floor(Math.random() * magic8Responses.length);

  response.send(`<h1>${magic8Responses[randomRes]}</h1>`);
});
