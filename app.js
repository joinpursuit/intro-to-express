const express = require('express')
const app = express()

app.get('/terminator', (req, res) => {
  res.send("I'll be back")
  // res.send("Hasta la vista, baby")
})

app.get('/Emeral', (req, res) => {
  res.send('Bam')
})

app.get('/Homer-Simpson', (req, res) => {
  res.send("D'Oh")
})

app.get('/Fraiser', (req, res) => {
  res.send("I'm listening")
})

app.get('/Regis', (req, res) => {
  res.send('Is that your final answer?')
})

app.get('/James-Bond', (req, res) => {
  res.send('the name is Bond, James Bond')
})

app.get('/Rod-Tidwell', (req, res) => {
  res.send('Show me the money!')
})

app.get('/Jim-Lovell', (req, res) => {
  res.send('Houston, we have a problem')
})

app.get('/Travis-Bickle', (req, res) => {
  res.send("You talkin' to me?")
})

app.get('/Rocky', (req, res) => {
  res.send('Yo, Adrian')
})

app.get('/magic8', (req, res) => {
  
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
  ]

  const magic8Answer = () => {
    let randonIdx = Math.floor(Math.random() * magic8Responses.length)
    return magic8Responses[randonIdx]
  }
  res.send(`<h1>${magic8Answer()}</h1>`)
})


app.listen(3000)