//The way we import a library on the server side.
const express = require("express");

//Express is actually a function and it returns an object with which we can manage a server.
const app = express();

// The port we'll use. It's good to have this variable in case we want to change it later, so we don't have to hunt it down.We capitalize this variable to indicate to other programmers(it means nothing to the computer!)that this is a Global CONSTANT.
const PORT = 3003;

//The server object, app, has several methods. One is .get . It handles GEt requests. It takes two arguments : - a string for route, - a function to call (a callback!)whenever any client sends this request. When the express server gets a requests it calls your callback and gives it two values;- The request - The response
app.get("/", (request, response) => {
  response.send("Hiii There.");
});
app.get("/terminator", (request, response) => {
  response.send(`I'll be back`);
});
app.get("/zeus", (request, response) => {
  response.send(`Release the Kraken`);
});
app.get("/gollum", (request, response) => {
  response.send(`My precious`);
});
app.get("/James-Bond", (request, response) => {
  response.send(`the name is Bond, James Bond`);
});
app.get("/Rod-Tidwell", (request, response) => {
  response.send(`Show me the money!`);
});
app.get("/Jim Lovell", (request, response) => {
  response.send(`Houston, we have a problem`);
});
app.get("/Rocky", (request, response) => {
  response.send(`Yo Adrian`);
});
app.get("/Jack-Dawson", (request, response) => {
  response.send(`I'm the king of the world!`);
});
app.get("/Travis-Bickle", (request, response) => {
  response.send(`You talking to me?`);
});
app.get("/JJ-Evans", (request, response) => {
  response.send(`Dy-no-myte!`);
});
//A basically required method to use on your server. It lets you open up to the server to requests. It takes two arguments : - a number for the port to listen on. - a function to call back when the server is up and running. We typically run a console log in the callback to let us know
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
