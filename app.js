const express = require('express')
const magic8Responses = require("./magic8Responses")

const app = express()

const PORT = 3003




app.listen(PORT, () => {
    console.log('Listening on PORT ', PORT)
})

app.get('/emeril', (req, res) => {
    res.send("Bam!")
})

app.get('/stevemcgarrett', (req, res) => {
    res.send('Book em Danno!')
})

app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian')
})

app.get('/zeus', (req, res) => {
    res.send('Release the Kraken')
})

app.get('/tonymontana', (req, res) => {
    res.send('Say hello to my little friend')
})

app.get('/dorothy', (req, res) => {
    res.send('Toto, Ive got a feeling were not in Kansas anymore')
})

app.get('/jjevans', (req,res) => {
    res.send('Dy-no-myte!')
})

app.get('/batman', (req, res) => {
    app.send('To the Batmobile!')
})

app.get('/gollum', (req, res) => {
    app.send('My precious')
})

app.get("/magic8", (req, res) => {
    const magic8Quote = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${magic8Quote}</h1>`)
})
