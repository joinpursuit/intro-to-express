const express = require("express");
const app  = express()
const PORT = 3002;
app.listen(PORT, () => { console.log("listening on PORT: ", PORT)})

app.get("/daliz", (req, res) => {
    res.send("hello")
})