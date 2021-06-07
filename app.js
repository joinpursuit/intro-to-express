const express = require("express")
const app = express()
// const PORT = 3003

app.get("/", (request, response) => {
    response.send("Hello, world!")
})

app.get("/uni", (request, response) => {
    response.send("Hello Universe!")
})

app.get("/terminator", (request, response) => {
    response.send("I'll be back")
    // response.send('Hasta la vista, baby')
})

app.get('/tim%20gunn', (request, response) => {
    response.send("Here's looking at you, kid")
})

app.get('/emeril', (request, response) => {
    response.send("Bam!")
})

app.get('/steve-mcgarrett', (request, response) => {
    response.send("Book 'em Danno!")
})

app.get('/coach.taylor', (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get('/homer_simpson', (request, response) => {
    response.send("D'Oh")
})
app.get('/bruce=banner', (request, response) => {
    response.send("Don't make me angry")
})
app.get('/JJ%Evans', (request, response) => {
    response.send("Dy-no-myte!")
})
app.get('/batman', (request, response) => {
    response.send("To the Batmobile!")
})
app.get('/hannibal*smith', (request, response) => {
    response.send("I love it when a plan comes together")
})
app.get('/frasier', (request, response) => {
    response.send("I'm listening")
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

  app.get("/magic8" , (request, response) => {
      response.send(`<h1> ${magic8Responses[Math.floor(Math.random()*19)]} </h1>`)
  })


//   app.listen(PORT, ()=> {
//     console.log(`listening on port ${PORT}`)
// })

module.exports = app