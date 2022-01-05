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
response.send('Hi Jalamang J!')

})

app.get('/Terminator', (request, response) => {
    response.send("I\'ll be back!")

  })
app.get('/Terminator2', (request, response) => {
    response.send("Hasta la vista, baby")

  })

app.get('/Homer-Simpson', (request, response) => {
    response.send("D'Oh")
  })

app.get('/JJ-Evans', (request, response) => {
    response.send("Dy-no-myte!")
  })
  
app.get('/Batman', (request, response) => {
    response.send("To the Batmobile!")
  })

app.get('/Hannibal-Smith', (request, response) => {
    response.send("I love it when a plan comes together")
  })

app.get('/Jack-Dawson', (request, response) => {
    response.send("I'm king of the world!")
  })

app.get('/Frankenstein', (request, response) => {
    response.send("It's alive! It's alive")
  })
app.get('/Tony-Montana', (request, response) => {
    response.send("Say hello to my little friend")
  })
app.get('/Dorothy', (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
  })

app.get('/Rod-Tidwell', (request, response) => {
    response.send("Show me the money!")
  })

//A basically required method to use on your server. 
//It lets you open up the server to requests. It takes teo arguments:
// - a number for the port to listen to.
// - a function to call back when the server is up and running
//We typically run a console in the callback to let us know that it worked
app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})





