const { response } = require('express');
const express = require('express');

const app = express()


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
  ];
randomResponse =  magic8Responses[Math.floor(Math.random() * magic8Responses.length)]; 
  
  
  

app.get('/', (request, response) => {
    response.send("Hello, world!")
});

app.get('/terminator', (request, response) => {
    response.send("I'll be back")
});

app.get('/batman', (request, response) => {
    response.send("To the batmobile")
});

app.get('/zeus', (request, response) => {
    response.send("release the kraken")
});

app.get('/borg', (request, response) => {
    response.send("Resistance is futile")
});

app.get('/fraiser', (request, response) => {
    response.send("im listening")
});

app.get('/rocky', (request, response) => {
    response.send("yo, adrian")
});
app.get('/gollum', (request, response) => {
    response.send("my precious")
});
app.get('/emeril', (request, response) => {
    response.send("bam")
});


app.get('/magic8', (request, response) => {
    response.send(randomResponse)
});

app.listen(3003, () => {
    console.log('listening on port 3003')
})

module.exports = app
