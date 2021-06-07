const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/terminator', (req, res) => {
    const back = `i'll be back`
    const hasta = 'hasta la vista baby'
    res.send(`${back}\\ ${hasta}`)
})
// app.get('/terminator/2', (req, res)=> {
//     res.send(`hasta la vista baby`)
// })


app.get('/simpons', (req, res)=> {
    res.send(`doh!`)
})
app.get('/naruto', (req, res)=> {
    res.send(`massugu jibun no kotoba wa magenee. ore no nindou da`)
})
app.get('/bhad-barbie', (req, res)=> {
    res.send(`cash my outside how bout deh`)
})
app.get('/rocky', (req, res)=> {
    res.send(`Yo adrian`)
})
app.get('/gollum', (req, res)=> {
    res.send(`my precious`)
})
app.get('/james-bond', (req, res)=> {
    res.send(`the name is Bond, James Bond`)
})
app.get('/travis-bickle', (req, res)=> {
    res.send(`You talkin' to me?`)
})
app.get('/borg', (req, res)=> {
    res.send(`Resistance is futile`)
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
    const rand = Math.round(Math.random() * (magic8Responses.length + 1))
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(` <h1>${magic8Responses[rand]}</h1>`))
})

app.listen(3003)