const express = require("express");
const app = express();
const people = {
  sara: "i know how to talk",
  deborah: "Never give up",
  kiyomi: "I am ready to learn",
  mukayila: "I learn a lot on codewars",
  jenna: "top intro speaker",
  grep: "grrrrrrrrr",
  hannah: "I never complain",
  sam: "Always ready to help",
  Anthony: "Guitar star",
  "Harry-Callahan": "Go ahead, make my day",
  terminator: "I'll be back",
};

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
  "Very doubtful",
];

app.get("/", (req, res) => {
  res.send("Pursuit intro to express lab!!");
});
app.get("/magic8", (req, res) => {
  const ind = Math.floor(Math.random() * 20);
  res.send(magic8Responses[ind]);
});
app.get("/people/:people_id", (req, res) => {
  const id = req.params.people_id;

  res.send(people[id]);
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
