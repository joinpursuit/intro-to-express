//The way we import a library on the server side.
const express = require('express');

//'express' is a function and it returns an 
//obj with which we can manage a server
const app = express()

//The port we'll be using and it good to have save 
//the port in a variable in case we want to change
const PORT = 3003;

//The server obj, app, has several methods. One is '.get'. It handles GET requests.
//It takes two arguments: 
//- a string for the route
// - function to call (a callback!) whenever a client sends this request.
//When the express server gets a request, it calls your callback and gives 
//it two values:
// - request
// - response
//The response obj has a bunch of methods for sending a response back to the client.
app.get('/', (request, response) =>{
  // response.status(200).send('Hello, world!')
  response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">Hi Jalamang J!</h1>')
})

// const style = {
//   style: "font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;"
// };

app.get('/Terminator', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">I\'ll be back!</h1>')
  })

app.get('/Terminator2', (request, response) => {
    response.status(200).send("<h1 style='font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;'>Hasta la vista, baby</h1>")
  })

app.get('/Homer-Simpson', (request, response) => {
    response.status(200).send("<h1 style='font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;'>D'Oh</h1>")
  })

app.get('/JJ-Evans', (request, response) => {
    response.status(200).send("<h1 style='font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;'>Dy-no-myte!</h1>")
  })
  
app.get('/Batman', (request, response) => {
    response.status(200).send("<h1 style='font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;'>To the Batmobile!</h1>")
  })

app.get('/Hannibal-Smith', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">I love it when a plan comes together</h1>')
  })

app.get('/Jack-Dawson', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">I\'m king of the world!</h1>')
  })

app.get('/Frankenstein', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">It\'s alive! It\'s alive</h1>')
  })

app.get('/Tony-Montana', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">Say hello to my little friend</h1>')
  })

app.get('/Dorothy', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">Toto, I\'ve got a feeling we\'re not in Kansas anymore</h1>')
  })

app.get('/Rod-Tidwell', (request, response) => {
    response.status(200).send('<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">Show me the money!</h1>')
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
  let catchPhrase = ''
  let result = ''

app.get('/magic8', (request, response) => {
    for (let i = 0; i < magic8Responses.length; i++){
   catchPhrase = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }
  if((Math.floor(Math.random() * magic8Responses.length) % 2 === 1)){
    result = `<h1 style="font-style: italic; color: #ff0066; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">${catchPhrase}</h1>`
  } else {
    result = `<h1 style="font-style: italic; color: #c467; position: absolute; top: 50%; left: 10%; width: 400px; height: 300px; margin-top: -150px;">${catchPhrase}</h1>`
  }
  
  response.status(200).send(result)
  })



// EXPORT
module.exports = app


