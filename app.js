
// The way we import a library on the server side.
const express = require('express');

// 'express' is actually a function, and it returns an object with
// which we can manage a server.
const app = express()
// The below line is combining line 3 + line 7
// const app = require('express')();

// The port we'll be listening on or using. It's good to have this variable in // case we want to change it later, so we don't have to hunt it down. We capitalize this variable to indicate to other programmers (it means nothing to the computer!)
// That this is a GLOBAL CONSTANT.
// EXAMPLE: const PORT_NOT_TO_CHANGE = 3003;

const PORT = 3003;

// app.delete() (it deletes a request)
// .get (handle a get request)
// The server object, 'app', has several methods. One is '.get()'. It handles
// GET requests, it gathers info. It takes two arguments: 
// 1- a string for the route
// 2- a function to call (a callback!). It's similar to an event listener. 
// whenever any client(an iPhone, IoT devices, tablet, browser) sends this request. 
// app.get('/doggies', () => {
// });
// app.delete('/doggies', () => {
// });
// Server side rendering
// We're creating a front-end app & a back-end app.
// When the Express server gets a request, it calls your callback and gives it // two values: 
// 1- request: what you would use if you need more info about what we did
// 2- response: it is an object that has a bunch of methods you could use to send a response back to the client. Ex: data, a 404 error message. 
app.get('/', (request, response) => {
    response.send('Hiiiii there.')
});

app.get('/terminator', (request, response) => {
    response.send('Make it work.')
});


app.get('/bruce-banner', (request, response) => {
    response.send('Don\'t make me angry.')
});

app.get('/borg', (request, response) => {
    response.send('Resistance is futile.')
});

app.get('/zeus', (request, response) => {
    response.send('Release the Kraken.')
});

app.get('/rocky', (request, response) =>{
    response.send('Yo, Adrian')
});

app.get("/gollum", (request, response) => {
    response.send("My precious");
  });
  
  app.get("/james-bond", (request, response) => {
    response.send("The name is Bond, James Bond.");
  });
  
  app.get("/Jim-Lovell", (request, response) => {
    response.send("Houston, we have a problem.");
  });
  
  app.get("/Jack_Dawson", (request, response) => {
    response.send("I'm King of the world!");
  });
  
  app.get("/Homer-Simpson", (request, response) => {
    response.send("D'Oh");
  });

// A required method to use on your server. It lets you open up the server to /// requests. 
// It takes 2 arguments:
// 1- a number for the port to listen on.
// 2- a function to call back when the server is up and running.
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

// example of methods: methods are just objects  
// const app = {
//  length: 0,
//  push: function() {
//  }
// }