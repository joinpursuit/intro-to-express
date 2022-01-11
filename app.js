const express = require("express");

//configuration
const app = express();
const catchPhrasesArr = require("./models/catchPhrases.js");
const PORT = 3003;

//routes
// app.get("tim-gun", (req,res)=> {

// })
app.get("/terminator", (request, response) => {
    response.send("HHasta la vista, baby")
})

//listen
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})