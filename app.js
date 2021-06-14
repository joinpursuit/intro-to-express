const express = require('express')
const app = express();

app.get("/", (request, response) => {
    response.send("Hello World");
  });

  app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    res.send('Hasta la vista, baby');
  });

  app.get ('/Emiril' , (req, res) => {
      res.send ("BAM!!!")
  })

  app.get ('/Bart' , (req, res) => {
    res.send ("Eat My Shorts!")
  })

  app.get ('/JJ_Evans' , (req, res) => {
    res.send ("Dy-No-Myte!")
  })

  app.get ('/Regis_Philbin' , (req, res) => {
    res.send ("Is that your final answer?")
  })
  app.get ('/Fox_Mulder' , (req, res) => {
    res.send ("The truth is out there")
  })

  app.get ('/Tony_Montana' , (req, res) => {
    res.send ("Say hello to my little friend!!")
  })

  app.get ('/BatMan' , (req, res) => {
    res.send ("To the Batmobile!")
  })

  app.get ('/Borg' , (req, res) => {
    res.send ("Resistence is futile!")
  })

  app.get ('/James_Bond' , (req, res) => {
    res.send ("The name is Bond, James Bond.")
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
  
  const magic8Choice = () => {
    return magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }


  app.get ('/Magic8' , (req, res) => {
  res.send(`<h1>${magic8Choice()}</h1>`)
  })






  app.listen(3005);
