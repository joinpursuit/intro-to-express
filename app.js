const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/terminator', (request, response) => {
    response.send('I\'ll be back!')
});

app.get('/terminator2', (request, response) => {
    response.send('Hasta la vista, baby')
});

app.get('/Emeril', (request, response) => {
    response.send('Bam!');
});

app.get('/SteveMcGarrett', (request, response) => {
    response.send('Book \'em Danno!');
});

app.get('/CoachTaylor', (request, response) => {
    response.send('Clear eyes, full hearts, can\'t Lose');
});

app.get('/HomerSimpson', (request, response) => {
    response.send('D\'Oh');
});

app.get('/Batman', (request, response) => {
    response.send('To the Batmobile!');
});

app.get('/Borg', (request, response) => {
    response.send('Resistance is futile');
});

app.get('/TravisBickle', (request, response) => {
    response.send('You talkin\' to me?');
});

app.get('/Zeus', (request, response) => {
    response.send('Release the Kraken');
});

app.get('/JamesBond', (request, response) => {
    response.send('the name is Bond, James Bond');
});

app.get('/magic8', (request, response) => {
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
    response.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})