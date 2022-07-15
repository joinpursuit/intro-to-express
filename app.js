const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("HomePage")
})
app.get("/terminator", function(req, res){
    res.send("<h1>I'll be back</h1>")
});
app.get("/emeril", function(req, res) {
    res.send("<h1>Bam!</h1>")
})
app.get("/HomeSimpson", function(req, res){
    res.send("<h1>D'oh</h1>")
});
app.get("/BruceBanner", function(req, res){
    res.send("<h1>Don't make me angry</h1>")
});
app.get("/JJEvans", function(req, res){
    res.send("<h1>Dy-no-myte</h1>")
});
app.get("/Batman", function(req, res){
    res.send("<h1>To the Batmobile</h1>")
});
app.get("/HannibalSmith", function(req, res){
    res.send("<h1>I love it when a plan comes together</h1>")
});
app.get("/Fraiser", function(req, res){
    res.send("<h1>I'm listening</h1>")
});
app.get("/Regis", function(req, res){
    res.send("<h1>Is that your final answer </h1>")
});

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
  app.get("/magic8", function(req, res){
    let getRandom = magic8Responses[Math.floor(Math.random() * 19)];
    res.send(`<h1>${getRandom}</h1>`);
  })
app.listen(3300, function() {
    console.log("Working!!")
});