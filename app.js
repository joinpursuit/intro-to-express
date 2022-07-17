const express = require('express');
const app = express()

app.get('/', (request, response)=>{
  response.send('Your Express Page is Active')
});

app.get('/terminator', (request, response)=>{
  response.send("I'll be back")
  // response.send('Hasta la vista, baby')
  // Shows error within terminal
});

app.get('/coachtaylor', (request, response)=>{
  response.send("Clear eyes, full hearts, can't Lose")
});

app.get('/TravisBickle', (request, response)=>{
  response.send("You talkin' to me?")
})

app.get('/jamesBond', (request, response)=>{
  response.send("the name is Bond, James Bond")
})

app.get('/jackDawson', (request, response)=>{
  response.send("I'm king of the world!")
})

app.get('/zeus', (request, response)=>{
  response.send("Release the Kraken")
})
app.get('/jjevans', (request, response)=>{
  response.send("Dy-no-myte!")
})
app.get('/harryCallahan', (request, response)=>{
  response.send("Go ahead, make my day")
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
const randomizer = (magic8Responses) => {
 return magic8Responses[Math.floor(Math.random() * 20)] 
}
console.log(magic8Responses[Math.floor(Math.random() * 20)])

app.get('/magic8', (request, response)=>{
  response.send(`<h1> ${magic8Responses[Math.floor(Math.random() * 20)]}</h1>`)
})




app.listen(3003)