const express = require("express");
const app = express()
const PORT = 3002;
app.listen(PORT, () => { console.log("listening on PORT: ", PORT)});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})
app.get("/Emeril", (req, res) => {
    res.send("Bam!")
})
app.get("/Tony-Montana", (req, res) => {
    res.send("Say hello to my little friend")
})
app.get("/Homer-Simpson", (req, res) => {
    res.send(`D'Oh`)
})
app.get("/JJ-Evans", (req, res) => {
    res.send("Dy-no-myte!")
})
app.get("/Frankenstein", (req, res) => {
    res.send("It's alive! It's alive")
})
app.get("/Gollum", (req, res) => {
    res.send("My precious")
})
app.get("/Rocky", (req, res) => {
    res.send("Yo, Adrian")
})
app.get("/ric-flair", (req, res) => {
    res.send("Whoooooooo")
})
app.get("/james-bond", (req, res) => {
    res.send("the name is Bond, James Bond")
})
app.get("/Regis", (req, res) => {
    res.send("Is that your final answer?")
})