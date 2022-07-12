const express = require("express");
const app = express();
const magic8Responses = require("./magic8Responses");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/robin", (req, res) => {
  res.send('<h1>"Titans, go!"</h1>\n<h2>―Robin</h2>');
});

app.get("/michael-scott", (req, res) => {
  res.send(
    '<h1>"I am not superstitious, but I\'m a little stitious."</h1>\n<h2>―Michael Scott</h2>'
  );
});

app.get("/hank-hill", (req, res) => {
  res.send(
    '<h1>"I sell propane and propane accessories."</h1>\n<h2>―Hank Hill</h2>'
  );
});

app.get("/homer-simpson", (req, res) => {
  res.send(
    '<h1>"Kids, you tried your best, and you failed miserably. The lesson is: never try."</h1>\n<h2>―Homer Simpson</h2>'
  );
});

app.get("/bart-simpson", (req, res) => {
  res.send('<h1>"Don\'t have a cow, man!"</h1>\n<h2>Bart Simpson</h2>');
});

app.get("/bojack-horseman", (req, res) => {
  res.send(
    '<h1>"Sometimes I feel like I was born with a leak, and any goodness I started with just slowly spilled out of me, and now it\'s all gone."</h1>\n<h2>―BoJack Horseman</h2>'
  );
});

app.get("/diane-nguyen", (req, res) => {
  res.send(
    '<h1>"It\'s never too late to be the person you want to be. You need to choose the life you want."</h1>\n<h2>―Diane Nguyen</h2>'
  );
});

app.get("/walter-white", (req, res) => {
  res.send(
    '<h1>"I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!"</h1>\n<h2>―Walter White</h2>'
  );
});

app.get("/ralph-kramden", (req, res) => {
  res.send(
    '<h1>"Bang, zoom! To the moon, Alice!"</h1>\n<h2>―Ralph Kramden</h2>'
  );
});

app.get("/george-costanza", (req, res) => {
  res.send(
    '<h1>"Jerry, just remember. It\'s not a lie if you believe it."</h1>\n<h2>―George Costanza</h2>'
  );
});

app.get("/magic8", (req, res) => {
  const i = Math.floor(Math.random() * magic8Responses.length);
  res.send(`<h1>${magic8Responses[i]}<h1>`);
});

app.get("/teapot", (req, res) => {
  res
    .status(418)
    .send(
      `<h1>418 I'm a teapot</h1>\n<p>This server refuses to brew coffee because it is, permanently, a teapot.</br>This resulting entity body is short and stout.</br>Tip me over and pour me out.</p>`
    );
});

module.exports = app;
