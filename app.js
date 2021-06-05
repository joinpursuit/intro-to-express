const express = require("express")
const app = express();
const PORT = 3003;


app.get("/terminator", (req, res) => {
    res.send("I'll be back")

})
app.get("/terminator2", (req, res) => {
    res.send("Hasta la vista, baby")

})

app.get("/jamesbond", (req, res) => {
    res.send("the name is Bond, James Bond")
})

app.get("/zeus", (req, res) => {
    res.send("Release the Kraken")
})

app.get("/tonymonatana", (req, res) => {
    res.send("Say hello to my little friend")
})

app.get("/brucebanner", (req, res) => {
    res.send("Don't make me angry")
})

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/jackdawson", (req, res) => {
    res.send("I'm king of the world!")
})

app.get("/travisbickle", (req, res) => {
    res.send("You talkin' to me?")
})

app.get("/rocky", (req, res) => {
    res.send("Yo, Adrian")
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

  
  app.get("/magic8", (req, res) => {
      let randomWord = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]
      res.send(`<h1>${randomWord}</h1>`)

})  

app.listen(PORT, () => { console.log ("Listening on PORT; ", PORT)})