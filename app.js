const { response } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});

// app.get("/", (request, response) => {
//     response.status(418).send('Hello, world!')
// });


app.get("/", (request, response) => {
    response.send("Yoooooo bruh!");
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back!" + " Hasta la vista, baby");
});


app.get("/simpsons", (request, response) => {
    response.send("D'oh - Homer Simpson")
});

app.get("/startrek", (request, response) => {
    response.send("Resistance is futile - Borg")
});

app.get("/lordoftherings", (request, response) => {
    response.send("My precious - Gollum")
});

app.get("adventuretime", (request, response) => {
    response.send("Daddy, why did you eat my fries? - Marceline")
});

app.get("/wizardofoz", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore - Dorothy")
});

app.get("/xfiles", (request, response) => {
    response.send("The truth is out there - Fox Mulder")
});

app.get("/batman", (request, response) => {
    response.send("To the batmobile - Batman")
});

app.get("/zeus", (request, response) => {
    response.send("Release the Kraken - Zeus")
});

// * Magic eight ball

app.get("/magic8", (request, response) => {
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

        const eigthBallFortune = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
        response.send(`<h1>${eigthBallFortune}</h1>`);

    }
);

app.listen(3003);

module.exports = app
