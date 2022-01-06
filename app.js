// The way we import a library on the server side.
const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");

// "express" is actually a function,
// and it returns an object with which
// we can manage a server.
const app = express();



// The server object, "app", has several 
// methods. One is 'get'. It handles GET
// requests.
// It takes two arguments:
// - a string for the route
// a function to call (a callback!)
// whenever any client sends this request.
// When the Express server gets a request,
// it calls your callback and gives it two 
// values:
// - The request.
// - The response.
// The response object has a bunch of methods
// for sending a response back to the client.
app.get('/', (req, res) => {

    res.status(200).send("Hello?") // test purpose
    // res.render("index", {test: "Yes"})
});

// lab
const terminatorRouter = require("./routes/terminator")
app.use("/terminator", terminatorRouter)

const magic8Router = require("./routes/phrases")
app.use("/magic8", magic8Router)


// A basically required method to use on your 
// server. It lets you open up the server to 
// requests.
// It takes two arguments:
// - a number for the port to listen on.
// - a function to call back when the 
// server is up and running.
// We typically run a console log in the callback 
// to let us know that it worked.


module.exports = app, magic8Router