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
