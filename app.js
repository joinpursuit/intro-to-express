//BACKEND CODING USING EXPRESS LIBRARY

/*The way we import a library on the server side.
Import the library and Store it in a variable*/
const mango = require("express");

/*EXPRESS IS ACTUALLY A FUNCTION THAT RETURNS AN OBJECT USED TO MANAGE A SERVER*/
const app = mango();

// This is a GLOBAL CONSTANT
const PORT = 3003;

// The server object, "app", has several methods. One is .get. It handles GET requests. It takes 2 arguments: a STRING FOR THE ROUTE && a CALLBACK METHOD WHENEVER A REQUEST IS SENT
app.get("/", (req, res)=> {
// When the server gets a request, it calls the callback and gives it two values: THE REQUEST && THE RESPONSE. The response object has methods for sending a response back to client...hardware
    res.send("Hiiiii there");
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Frasier', (req, res) => {
    res.send('I\'m listening')
  })

  app.get('/terminator', (req, res) => {
    // res.send('I\ll be back')
    res.send('Hasta la vista, baby')
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
    let magic8Answer = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]
    res.send(`<h1>${magic8Answer}</h1>`)
  })

// Start taking requests. .listen takes 2 arguments: a NUMBER FOR THE PORT TO LISTEN ON && a FUNCTION TO CALL BACK WHEN THE SERVER IS UP AND RUNNING
app.listen(PORT, () => {
    // console log in callback to show that it works
    console.log(`Listening on port: ${PORT}`)

})