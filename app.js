const express = require('express')

const app = express()
const port = 3003

app.get('/emeril', (req, res) => {
    res.send('Bam!')
})


app.get('/fox molder', (req, res) => {
    res.send('The truth is out there')
})

app.get('/travis bickle', (req, res) => {
    res.send('You talkin\' to me?')
})

app.get('/jj evans', (req, res) => {
    res.send('Dy-no-myte!')
})

app.get('/borg', (req, res) => {
    res.send('Resistance is futile')
})

app.get('/zeus', (req, res) => {
    res.send('Release the Kraken')
})

app.get('/jack dawson', (req, res) => {
    res.send('I\'m king of the world!')
})

app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian')
})

app.get('/regis', (req, res) => {
    res.send(' Is that your final answer?')
})

app.get('/terminator', (req, res) => {
    res.send('I\ll be back, Hasta la vista, baby')
  })


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
    const magicResult = Math.floor(Math.random() * magic8Responses.length)
    res.send(<h1>`${magicResult}`</h1>)
  })

  app.listen(port, () => {
    console.log('Listening on port 3003!')
  })