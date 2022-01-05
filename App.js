const express = require('express');
const routes = require('./routes');

//'express' is actually a function,
// and it returns an object with which
// we can manage a server.

const app = express();

const PORT = 3003;

//server object app, has several methods.
//One is '.get'. It handles GET request.
//It takes two arguments:
// - a string for the route
// - a function to call (a callback!)
// whenever any client sends this request.

routes.forEach((route) =>
  app.get(route.url, (req, res) => {
    const random = Math.floor(Math.random() * route.quote.length);
    Array.isArray(route.quote)
      ? res.send(`<h1>${route.quote[random]}</h1>`)
      : res.send(`<h1>${route.quote}</h1>`);
  })
);

//required method on server;
//opens up server to request
// It takes two arguments:
// - a number for the port to listen to
// - a function to call back when the server is up and running

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
