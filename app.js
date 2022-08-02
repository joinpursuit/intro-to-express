const express = require("express");
 const app = express();

 app.get("/tim-gunn", (req, res) => {
   res.send("Make it work");
 });
 app.get("/terminator", (req, res) => {
   res.send(`I'll be back`);
   res.send(`Hasta la vista, baby`);
 });
 app.get("/jj-evans", (req, res) => {
   res.send(`Dy-no-myte!`);
 });

 app.get("/borg", (req, res) => {
   res.send(`Resistance is futile`);
 });

 app.get("/zeus", (req, res) => {
   res.send(`Release the Kraken`);
 });
 app.get("/tony-montana", (req, res) => {
   res.send(`Say hello to my little friend   `);
 });
 app.get("/Rocky", (req, res) => {
   res.send(`Yo, Adrian`);
 });
 app.get("/jack-dawson", (req, res) => {
   res.send(`I'm king of the world!`);
 });

 app.get("/gollum", (req, res) => {
   res.send(`My precious`);
 });

 app.get("/rod-tidwell", (req, res) => {
   res.send(`Show me the money!`);
 });

 const magic8Responses = [
   "It is certain",
   "It is decidedly so",
   "Without a doubt",
   "Yes - Definitely",
   "You may rely on it",
   "As I see it, yes",
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
   "Very doubtful",
   "Most likely"
   
 ];
 app.get("/magic8", (req, res) => {
   const magic8Answer = Math.floor(Math.random() * magic8Responses.length);
   res.send(`<h1>${magic8Responses[magic8Answer]}<h1>`);
 });

 app.listen(3333, () => {
   console.log("Listening on port 3333 8.4");
 });