/* 
// CLASSNOTES (7/12):
// --------------------------------------------------------------------
const express = require('express');
const app = express();

// first -> route - default url;
// next -> callback function - (request, response)
app.get('/', (request, response) => {
    response.send("Hello 8.4!!")
})

// If server was running before adding a new '.get', make sure to restart router
app.get('/whatever', (request, response) => {
    response.send("im tired!!!")
})

// First Param -> give it a port to "listen" on
// Second Param -> call-back function (way to VERIFY that our server is running)
app.listen(3333, () => {no
    console.log("Listening on port 3333 8.4")
});

// (1) npm install -g nodemon 
// (2) nodemon <file-name.js>
// Once this is running it will allow our local host to reset automatically if there are any changes done to our 'js' file!!! No need to reset our router after every change (unlike if we just used 'npm <file-name.js>' )
*/

const express = require('express');
const supertest = require('supertest');
const app = express();


// Routes :
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})

app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
})
//
 
app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
})

app.get('/emeril', (req, res) => {
    res.send('Bam!')
})

// Lowercase or not, the res will still show 
app.get('/Steve-McGarrett', (req, res) => {
    res.send("Book 'em Danno!")
})

app.get('/coach-taylor ', (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
})

app.get('/homer-simpson', (req, res) => {
    res.send("D'Oh")
})

app.get('/bruce-banner', (req, res) => {
    res.send("Don't make me angry")
})

app.get('/jj-evans', (req, res) => {
    res.send('Dy-no-myte!')
})

app.get('/batman', (req, res) => {
    res.send('To the Batmobile!')
})

app.get('/Fraiser', (req, res) => {
    res.send("I'm listening")
})

// Terminator!

app.get('/terminator', (req, res) => {
  res.send("I'll be back")
})

app.get('/terminator2', (req, res) => {
    res.send('Hasta la vista, baby')
})

// Magic 8 Ball

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

app.get('/magic8', (req, res) => {
    let randomM8 = magic8Responses[Math.floor(Math.random() * 19)];
    res.send(`<h1>${randomM8}</h1>`);
})

app.listen(3003, () => {
    // console.log("Here's looking at you, kid")
});

module.exports = app;


