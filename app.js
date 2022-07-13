// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const port = 3000;

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
app.get("/", (req, res) => {
  res.send("Hello World! This is my first server.");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/SteveMcGarret", (req, res) => {
  res.send("Book em Danno!");
});

app.get("/CoachTaylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose!");
});

app.get("/HomerSimpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/BruceBanner", (req, res) => {
    res.send("Don't make me angry");
  });

  app.get("/BruceBanner", (req, res) => {
    res.send("Don't make me angry");
  }); 

  app.get("/JJEvans", (req, res) => {
    res.send("Dy-no-myte!");
  }); 

  app.get("/Batman", (req, res) => {
    res.send("To the Batmobile!");
  }); 

  app.get("/HannibalSmith", (req, res) => {
    res.send("I love it when a plan comes together");
  }); 

  app.get("/Fraiser", (req, res) => {
    res.send("I'm listening");
  });

  app.get("/Regis", (req, res) => {
    res.send("Is that your final answer?");
  });

  app.get("/Borg", (req, res) => {
    res.send("Resistance is futile");
  });

  app.get("/FoxMulder", (req, res) => {
    res.send("The truth is out there");
  });

  app.get("/HarryCallahan", (req, res) => {
    res.send("Go ahead, make my day");
  });

  app.get("/TravisBickle", (req, res) => {
    res.send("You talkin' to me?");
  });

  app.get("/TonyMontana", (req, res) => {
    res.send("Say hello to my little friend");
  });

  app.get("/Zeus", (req, res) => {
    res.send("Release the Kraken");
  });

  app.get("/JamesBond", (req, res) => {
    res.send("Release the Kraken");
  });

  app.get ("/Dorothy", (req, res) => {
res.send("Toto, I've got a feeling we're not in Kansas anymore!")
  });

  app.get ("/RodTidwell", (req, res) => {
    res.send("Show me the money!")
  });

  app.get ("/Frankenstein", (req, res) => {
    res.send(" It's alive! It's alive!!")
  });

  app.get ("/JimLovell", (req, res) => {
    res.send(" Houston, we have a problem")
  });

  app.get ("/Rocky", (req, res) => {
    res.send("Yo, Adrian")
  });

  app.get ("/Gollum", (req, res) => {
    res.send("My precious.")
  });

  app.get ("/JackDawson", (req, res) => {
    res.send("I'm king of the world!")
  });

  app.get('/terminator', (req, res) => {
    res.send('I\ll be back')
    res.send('Hasta la vista, baby')
  });

  app.get('/magic8', (req, res) => {
      const resp = Math.floor(Math.random() * magic8Responses.length);
    res.send(`<h1> ${magic8Responses[resp]}</h1>`)
  });

// LISTEN
app.listen(3000, () => {
  console.log(`Example app listening on ${port}.`);
});

// EXPORT
module.exports = app