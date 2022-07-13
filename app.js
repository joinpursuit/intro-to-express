/** @format */

// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

app.get('/', (request, response) => {
	response.status(418).send('Hello from Michael and Mason!');
});

// ROUTES

// Catchphrases Express
app.get('/terminator', (request, response) => {
	response.send("I'll be back");
});

app.get('/terminator2', (request, response) => {
	response.send('Hasta la vista, baby');
});

app.get('/homer-simpson', (request, response) => {
	response.send("D'Oh");
});

app.get('/jj-evans', (request, response) => {
	response.send('Dy-no-myte!');
});

app.get('/emeril', (request, response) => {
	response.send('Bam!');
});

app.get('/batman', (request, response) => {
	response.send('To the Batmobile!');
});

app.get('/gollum', (request, response) => {
	response.send('My precious!');
});

app.get('/zeus', (request, response) => {
	response.send('Release the Kraken');
});

app.get('/rocky', (request, response) => {
	response.send('Yo, Adrian');
});

app.get('/frankenstein', (request, response) => {
	response.send("It's alive! It's alive!");
});

// Magic 8 Ball
const magic8Responses = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - Definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes, and signs point to yes',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

function getRandomMagic8Response(magic8Responses) {
	return magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
}

app.get('/magic8', (request, response) => {
	response.send(
		`<h1>The Magic 8 Ball says: <span style='color: red;'>${getRandomMagic8Response(
			magic8Responses
		)}</span>
			</h1>`
	);
});

// EXPORT
module.exports = app;
