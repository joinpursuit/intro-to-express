const express = require("express");
const app = express();

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
	"Very doubtful",
];

app.get("/", (request, response) => {
	answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
	response.status(418).send(`<h1>${answer}</h1>`);
});

app.get("/brimstone", (request, response) => {
	response.send("MOLLY");
});

app.get("/terminator", (request, response) => {
	response.send("Ill be back");
});

app.get("/edwin", (request, response) => {
	response.send("No matter what, everything always works out");
});

app.get("/tony-montana", (request, response) => {
	response.send("Say hello to my little friend");
});

app.get("/zeus", (request, response) => {
	response.send("Release the kraken!");
});

app.get("/bond", (request, response) => {
	response.send("The name is Bond. James Bond.");
});
app.get("/mkbhd", (request, response) => {
	response.send("Sup, MKBHD here");
});
app.get("/jjevans", (request, response) => {
	response.send("DY-NO-MITE!");
});
app.get("/batman", (request, response) => {
	response.send("i'm batman.");
});

//app.listen(3000);

module.exports = app;
