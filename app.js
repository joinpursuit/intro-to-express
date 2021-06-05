const express = require("express");
const app = express()
const PORT = 3002;
app.listen(PORT, () => { console.log("listening on PORT: ", PORT)});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})
app.get("/Emril", (req, res) => {
    res.send("Bam!")
})
