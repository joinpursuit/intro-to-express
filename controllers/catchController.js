const express = require("express");
const catchPhrases = require("../models/catchPhrases.js");
const catchPhraseRoute = express.Router();
const catchPhraseArr = require("../models/catchPhrases.js");

catchPhraseRoute.get("/", (req, res)=> {
    res.json(catchPhraseArr);
})

catchPhraseRoute.get("/:index", (req, res)=> {
    const { index } = req.params;
    if(catchPhraseArr[index]){
        res.send(`${catchPhraseArr[index].name} said in a movie once "${catchPhraseArr[index].name}"`);
    }
})

module.exports = catchPhraseRoute;