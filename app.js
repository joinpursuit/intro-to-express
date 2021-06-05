const express = require("express");
const app = express();
const PORT = 3003;

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/jordan", (request, response) => {
  response.send("Nice!!!");
});
app.get("/jeff", (request, response) => {
  response.send("My name is jeff!!!");
});
app.get("/Zeus", (request, response) => {
  response.send("Release the Kraken");
});
app.listen(PORT, () => {
  console.log("Listening on Port ", PORT);
});
