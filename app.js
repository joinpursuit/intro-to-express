const express = require("express");

//configuration
const app = express();

app.use(express.json());

const catchPhraseController = require("./controllers/catchController");

const catchPhrasesArr = require("./models/catchPhrases.js");
const PORT = 3003;

//routes
app.get("/", (req, res)=> {
    res.send(`Welcome to my website`)
});

app.get("/tim-gun", (req,res)=> {
    res.send("Make it work");
});

app.get("/terminator", (request, response) => {
    response.send("HHasta la vista, baby");
})

app.use("/catchphrase", catchPhraseController);

app.get("*", (req, res)=> {
    res.status(404).send("Error 404: Page not found");
});

//listen
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
});