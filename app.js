const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

const { response, request } = require("express")
const express = require("express")
const app = express()

app.get("/", (request,response) => {
    response.send("This is your local host ...")
})

app.get("/terminator", (request,response) => {
    response.send("I\'ll be back")
})
app.get("/terminator2", (request,response) => {
    response.send("Hasta la vista, baby")
})

app.get("/tim-gunn", (request, response) => {
    response.send("Make it work")
})

app.get("/batman", (request,response) => {
    response.send("To the Batmobile!")
})

app.get("/homer-simpson", (request,response) => {
    response.send("D'Oh")
})

app.get("/frankenstein", (request,response) => {
    response.send("It\'s alive! It\'s alive")
})

app.get("/zeus", (request,response) => {
    response.send("Release the Kraken")
})

app.get("/james-bond", (request,response) => {
    response.send("the name is Bond, James Bond")
})

app.get("/jack-dawson", (request,response) => {
    response.send("I\'m king of the world!")
})

app.get("/rocky", (request,response) => {
    response.send("Yo, Adrian")
})

app.get("/regis", (request,response) => {
    response.send("Is that your final answer?")
})

app.get("/jim-lovell", (request,response)=> {
    response.send("Houston, we have a problem")
})

app.get("/magic8", (request,response) => {
    let res = Math.random(Math.floor(magic8Responses))
    response.send(`<h1>${res}</h1>`)
})





app.listen(3003)






// let randomWord = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]
//     response.send(`<h1>${randomWord}</h1>`)