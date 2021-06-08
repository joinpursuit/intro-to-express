// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()
const PORT = 3003

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
  
// ROUTES
// app.get('/', (request, response) => {
//    response.status(200).send('Hello, world!')
// })

// ROUTES
app.get('/', (request, response) => {
   response.status(418).send('Hello, world!')
})

// app.get("/", (request, response) =>{ 
//     response.send('Hello, world!')
//  })

app.get("/terminator", (request, response) =>{ 
    response.send("I'll be back , Hasta la vista, baby")

 }) 

 app.get("/tim\-gunn", (req, response) => {
    response.send("Here's looking at you, kid")
  })




  app.get("/Homer%20Simpson", (request, response) =>{ 
    response.send("D'Oh")
 }) 
 
 app.get("/JJ%20Evans", (request, response) =>{ 
    response.send("Dy-no-myte!")
 }) 

 app.get("/Batman", (request, response) =>{ 
    response.send("To the Batmobile!")
 }) 

 app.get("/Tony%20Montana", (request, response) =>{ 
    response.send("Say hello to my little friend")
 }) 

 app.get("/Zeus", (request, response) =>{ 
    response.send("Release the Kraken")
 }) 

 app.get("/James%20Bond", (request, response) =>{ 
    response.send("the name is Bond, James Bond")
 }) 

 app.get("/Dorothy", (request, response) =>{ 
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
 }) 

 app.get("/Rod%20Tidwell", (request, response) =>{ 
    response.send("Show me the money!")
 }) 

 app.get("/Rocky", (request, response) =>{ 
    response.send("Yo, Adrian")
 }) 

 app.get("/magic8", (request, response) =>{ 
    
    const magic8Answer = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]
    response.send(`<h1>${magic8Answer}</h1>`)
 }) 


// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})

// EXPORT
module.exports = app