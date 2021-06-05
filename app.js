const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (request, response) => {
  response.send("My First API");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/sephiroth", (req, res) => {
  res.send("I will... never be a memory...");
});

app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/james-bond", (req, res) => {
    res.send("The name is Bond, James Bond");
});

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/jim-lovell", (req, res) => {
    res.send("Houston, we have a problem")
})

app.get("/gollum", (req, res) => {
    res.send("My precious")
})

app.get("/coach-taylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
})

app.get("/tony-montana", (req, res) => {
    res.send("Say hello to my little friend")
})

app.get("/zeus", (req, res) => {
    res.send("Release the Kraken")
})

app.get("/magic8", (req, res) => {
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

    magic8Response = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${magic8Response}</h1>`)
})

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});
