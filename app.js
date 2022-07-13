const express = require("express");
const app = express();
const PORT = 3003;



app.get("/", (request, response) => {
    response.send("Hello World");
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back");
    response.send("Hasta la vista, baby")
});

app.get("/emeril", (request, response) => {
    response.send("Bam!");
});

app.get("/bruce-banner", (request, response) => {
    response.send("Don't make me angry!");
});

app.get("/batman", (request, response) => {
    response.send("To the Batmobile!");
});

app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together!");
});

app.get("/borg", (request, response) => {
    response.send("Resistance is futile!");
});

app.get("/tony-montana", (request, response) => {
    response.send("Say hello to my little friend");
});

app.get("/rocky", (request, response) => {
    response.send("Yo, Adrian");
});

app.get("/awesome", (request, response) => {
    response.send("Peace Planet");
});

// Magic8 Activity

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

// 
const random8 = (magic8Responses) => {
    return magic8Responses[Math.floor(Math.random() * magic8Responses.length)]   
 }

app.get("/magic8", (request, response) => {
    response.send(`<h1>${random8(magic8Responses)}</h1>`);
});





app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
  