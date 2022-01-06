const express = require("express");
const res = require("express/lib/response");
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
	res.send("Hi there !! ");
	console.log("hello to you too");
});
app.get("/terminator", (req, res) => {
	res.send("I'll be back");
});
app.get("/Emeril", (req, res) => {
	res.send("Bam!");
});
app.get("/Batman", (req, res) => {
	res.send("To the Batmobile!");
});
app.get("/Fraiser", (req, res) => {
	res.send("I'm listening");
});
app.get("/Regis", (req, res) => {
	res.send("is that your final answer?");
});
app.get("/Borg", (req, res) => {
	res.send("Resistance us futile");
});
app.get("/tonymontana", (req, res) => {
	res.send("say hellp to my little friend");
});
app.get("/Rocky", (req, res) => {
	res.send("Yo, Adrian");
});

let rand = Math.floor(Math.random() * 19);

// magic 8 ball
app.get("/magic8", (req, res) => {
	res.send(`<h1>${magic8Responses[rand]}</h1>`);
});

app.listen(3000);
