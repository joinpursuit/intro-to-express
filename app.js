const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get('/tim-gunn',(request, response)=>{
    response.send("Make it work")
})

app.get('/Emeril',(request,response)=>{
 response.send("Bam!")
})
app.get('/Coach-Taylor',(request,response)=>{
    response.send("Clear your eyes, full hearts, can,t Lose")
   })

   app.get('/terminator',(request, respond)=>{
       respond.send('I\ll be back')
       respond.send('Hasta la vista, baby')
   })

   app.get('/magic8',(request,respond)=>{
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
      function randomResponse(){
          let diffentResponse = Math.floor(Math.random() * (magic8Responses.length));
          return `${magic8Responses[diffentResponse]}`
       
      }
      respond.send(randomResponse())
   })

app.listen(3003); 

// //Dependencies
// const express = require('express')

// //Configuration
// const app = express()
// const PORT = 3003

// //Routes
// app.get('/',(request,response)=>{
//     response.send("Hello, World")
// })

// app.listen(PORT, ()=>{
//     console.log(`Listening on port ${PORT}`)
// })

// module.exports