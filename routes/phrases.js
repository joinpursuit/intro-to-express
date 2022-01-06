const express = require("express")
const banana = express.Router()
const magic8Responses = require("../data/phrasesdb")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const randomNum = getRandomInt(magic8Responses.length)
const magic8Answer = magic8Responses[randomNum]

banana.get('/', (req, res) => {
    res.status(200).send(`<h1>${magic8Answer}</h1>`)
  })


module.exports = banana