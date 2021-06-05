
const express = require("express")
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.send("Hello, world!")
})
// app.get('/', (request, response) => {
//     response.status(200).send('Hello, world!')
// })
app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

app.get('/steve', (req, res)=> {
    res.send(`Book 'em Danno!`)
})

app.get('/carlos', (req, res) =>{
    res.send('my dog is Milo')
})

app.get('/terminator', (req, res) => {
    res.send('I\ll be back')
//    res.send('Hasta la vista, baby')
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
app.get('/magic8', (req, res)=>{
    res.send(`<h1> ${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]} </h1>`)
})

app.listen(PORT), () =>{console.log(`Listening to Port`, PORT)}

module.exports =app