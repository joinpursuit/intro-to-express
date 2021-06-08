const { response } = require("express")
const express = require("express")
const app = express()


app.get("/", (require, response) => {   // I assume the .get method in the express() function/object to be like an event listener.
    response.send("Hello Nodemon")  // .send() is a Route Method. Derived from one of the HTTP methods, and attached to an instance
})                                  // of the Express class. send() is defined for both GET and POST.
app.get("/evildead", (req, res) => {
    res.send("I'll swallow your soul, I'll swallow your soul! \n Swallow this")
})
app.get("/1950", (req, res) => {
    res.send("Nico Time Cigarettes - The Smooth Taste Expectant Mothers Crave!")
})
app.get("/montypython", (req,res) => {
    res.send("I fart in your general direction")
})
app.get("/alien", (req, res) => {
    res.send("In space, no one can hear you scream")
})
app.get("/ghost", (req, res) => {
    res.send("a love that will last forever")
})
app.get("/ghostbusters", (req,res) => {
    res.send("Who you gonna call?")
})
app.get("/frasier", (req, res) => {
    res.send("I'm listening")
})
app.get("/big", (req, res) => {
    res.send("Remember when buddies were buddies, girls were a mystery, and you couldn't wait to grow up?")
})
app.get("/big/lebowski", (req, res) => {
    res.send("Her life was in their hands. Now her toe is in the mail.")
})
app.get("/terminator", (require, response) => {
    response.send("I'll be back. "+"Hasta la vista, baby")
})
app.get("/test", (req, res) => {
    res.send("ab&cd"+"ef")
})


app.listen(3003, () => {
    console.log("Running express hollerrr!")
})
