const express = require("express")

const app = express()

const port = 3003

app.get('/', (req, res) => {
    res.send('This is a basic Express test.')
})

app.get('/terminator', (req, res) => {
    res.send('I\'ll be back! & Hasta la vista, baby!')
})

app.get('/kratos', (req, res) => {
    res.send('BOY!')
})

app.get('/goofy', (req, res) => {
    res.send('A-HYUCK!')
})

app.get('/roger-smith', (req, res) => {
    res.send('DIVE ON IN!')
})

app.get('/provost-willem', (req, res) => {
    res.send('Fear the Old Blood.')
})

app.get('/godfrey-first-elden-lord', (req, res) => {
    res.send('I have given thee courtesy enough...')
})

app.get('/solid-snake', (req, res) => {
    res.send('Metal...Gear?')
})

app.get('/ansem-seeker-of-darkness', (req, res) => {
    res.send('One who knows nothing can understand...nothing.')
})

app.get('/omniblade', (req, res) => {
    res.send('OVERDRIVE!')
})

app.get('/dracula', (req, res) => {
    res.send('What is a man?! A miserable little pile of secrets!')
})

app.get('/magic8', (req, res) => {
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
res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}<h1>`)
})

app.listen(port, () => {
    console.log(`This is an example of the app listening on port ${port}.`)
})

