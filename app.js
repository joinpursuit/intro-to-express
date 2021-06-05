const express = require("express")
const app = express();
const PORT = 3003;

app.get("/", (request, response) => {
    response.send("I really like EXPRESS!")
})

app.get("/terminator", (request, response) => {
    response.send(`<h1>I'll be back!</h1> <p>Hasta la vista, baby</p>`)
    // response.send("Hasta la vista, baby") Only one response per request
})

app.get("/emeril", (request, response) => {
    response.send("BAM!")
})

app.get("/steve-mcgarrett", (request, response) => {
    response.send("Book 'em Danno!")
})

app.get("/coach-taylor", (request, response) => {
    response.send("Clear eyes, full hearts, can't lose")
})

app.get("/homer-simpson", (request, response) => {
    response.send("D'oh!")
})

app.get("/bruce-banner", (request, response) => {
    response.send("Don't make me angry")
})

app.get("/jj-evans", (request, response) => {
    response.send("Dy-no-myte!")
})

app.get("/batman", (request, response) => {
    response.send("To the batmobile!")
})

app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together")
})

app.get("/fraiser", (request, response) => {
    response.send("I'm listening")
})

app.listen(PORT, () => {
    console.log("Listening on PORT: ", PORT)
})