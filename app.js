const { response } = require("express");
const express = require("express"); 
//importing the library express and storing it in a variable
//express is actually a function and it returns an object with which we can manage a server
//storing the execution against the library, accessing the library this way
const app = express();

//this is the port we will be using
//store it as a variable, if we want to change it
//capitalize port to communicate to other developers that this will remain constant in the app
const PORT = 3003;

//the server object, app, has many methods. One is '.get'. Handles GET requests. It takes two arguments
// 1. a string for the route
//2. a function to call (a call back), whenever any client sends this request
//when the express server get a reuqest, it calls your callback and gives it two values
//1. the request
//2.the response
//the response object has a ton of methods for sending a response back to a client
app.get("/",(request,response) => {
    response.send('Hey girl');
})

app.get("/terminator",(request,response) => {
    response.send(`I'll be back`);
})

//with a space
app.get(`/tim%20gunn`, (request,response) => {
    response.send("Make it work")
})

//with a dash
app.get(`/tim-gunn`, (request,response) => {
    response.send("Make it work")
})

app.get(`/tim-gunn`, (request,response) => {
    response.send("Make it work")
})

app.get("/homer%20simpson", (request,response) => {
    response.send("D'Oh")
})

app.get("/batman", (request,response) => {
    response.send("To the Batmobile!")
})

app.get("/bruce-banner",(request,response) => {
    response.send("Don't make me angry")
})

app.get("/borg",(request,response)=> {
    response.send("Resistance is futile")
})

app.get("/tony_montana",(request,response) => {
    response.send("Say hello to my little friend")
})

app.get("/james-bond",(request,response)=> {
    response.send("The name is Bond, James Bond")
})

app.get("/rocky",(request,response) => {
    response.send("Yo, Adrian")
})
//homer, batman, bruce banner,borg. tony montana,james bond, rocky


//the method needed on the server. It lets you open up the request.
//two arguments are necessary 
//1. the port that you're listening in on
//2. function to callback when the server is uo and running
//run a console.log in the callback to let us know that i
app.listen(PORT, ()=> {
    console.log(`Listening in on port: ${PORT}` )
})

