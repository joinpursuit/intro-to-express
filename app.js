const { res } = require("express")
const express = require("express")

const app = express()
const PORT = 3003;




app.get("/", (req,res) => {
    res.send(`Hi, try terminator, reindhart, duke-nukem, dio-brando, glen, 
    lieutenant-jean-rasczak, lord-of-the-arena, king-leonidas, albert-wesker`)
})

app.get("/terminator", (req, res) => {
    res.send(`I'll be back`)
    res.send(`Hasta la vista, baby`)
  })

app.get("/reindhart", (req,res) => {
    res.send("Catchphrase!")
})

app.get("/duke-nukem", (req,res) => {
    res.send("It's time to kick ass and chew bubblegum and I'm all outta gum")
})

app.get("/dio-brando", (req,res) => {
    res.send("It was me, Dio!")
})

app.get("/glen", (req,res) => {
    res.send("Some political crap, I got a zero on my SATs")
})

app.get("/lieutenant-jean-rasczak", (req,res) => {
    res.send("Come on you apes! You wanna live forever?")
})

app.get("/lord-of-the-arena", (req,res) => {
    res.send("The Gates are open!")
})

app.get("/king-leonidas", (req,res) => {
    res.send("Spartans! Ready your breakfast and eat hearty. For tonight, we dine in Hel!")
})

app.get("/albert-wesker", (req,res) => {
    res.send("Seven minutes, seven minutes is all I can spare to play with you.")
})

app.get("/magic8", (req, res) => {
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

   function randomRes() {
       let num = "";
        num = Math.floor(Math.random() * Math.floor(magic8Responses.length));
        eightball = magic8Responses[num]
        return eightball;
      }
    res.send(`${randomRes()}`)
})

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})

