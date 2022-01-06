const express = require("express");
let app = express();

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

app.get("/", (req, res) => {
	res.status(500).send("Hi there !! ");
	console.log("hello to you too");
});

app.get("/terminator", (req, res) => {
	res.send("I'll be back");
	res.send("I'll be backkkkk");
});

let rand = Math.floor(Math.random() * 19);

// magic 8 ball
app.get("/magic8", (req, res) => {
	res.send(`<h1>${magic8Responses[rand]}</h1>`);
});

app.listen(3000);
