//DEPENDENCIES
const { response } = require("express");
const express = require("express");

//CONFIG

const app = express();
const PORT = 3003;

//ROUTES

app.get("/", (req, res) => {
  res.send("Hello, Pursuit");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/homer", (req, res) => {
  res.send("Doh!");
});

app.get("/batman", (req, res) => {
  res.send("To the batmobile!");
});

app.get("/hannibal", (req, res) => {
  res.send("it puts the lotion on the skin or else it gets the hose again");
});

app.get("/nightmareonelm", (req, res) => {
  res.send("Welcome to Prime Time, $!@#*");
});

app.get("/scarymovie", (req, res) => {
  res.send("Waaaazaaaaaaaaaaaa");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
