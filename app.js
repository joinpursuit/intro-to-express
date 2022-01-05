// //"type": "module"
// import express from "express";

// /**
//  * "express" is a actually a function and it 
//  * returns an object with which we can use to 
//  * manage a server.
//  */
// const app = express();

// //This is the port we'll use
// const port = 3003;

// app.get("/", (request, response)=> {
//  response.send('Hiiiii there')
// })
// app.get("/", (request, response)=> {
//  response.send('Hiiiii there')
// })
// app.get("/", (request, response)=> {
//  response.send('Hiiiii there')
// })
// app.get("/", (request, response)=> {
//  response.send('Hiiiii there')
// })

// app.listen(port, ()=> {
//     console.log(`Listening on port: ${port}`)
// })

import express from 'express'

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

const app = express()

const port = 3003

app.get('/Emeril', (request, response) => {
    response.send("Bam!")
})

app.get('/steve-mcGarrett', (request, response) => {
    response.send("Book 'em Danno!")
})

app.get('/coach-taylor', (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get('/homer-simpson', (request, response) => {
    response.send("D'Oh")
})

app.get('/bruce-banner', (request, response) => {
    response.send("Don't make me angry")
})

app.get('/bruce-banner2', (request, response) => {
    response.send("Hulk Smash")
})

app.get('/magic8', (request, response) =>{


  const message = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]

  response.send(`<h1>${message}</h1>`)
})

app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`)
})