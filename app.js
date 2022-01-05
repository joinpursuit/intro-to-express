const express = require("express");

const app = express();

const PORT = 3003;

app.get("/", (request, response) => {
    response.send("Hi There!")
});

app.get("/terminator", (request, response) => {
    response.send("I'll be back!")
});
app.get("/terminator2", (request, response) => {
    response.send("Hasta la vista, baby")
});

app.get("/homer-simpson", (request, response) => {
    response.send("D'Oh")
});
app.get("/jj-evans", (request, response) => {
    response.send("Dy-no-myte!")
});
app.get("/batman", (request, response) => {
    response.send("To the Batmobile!")
});
app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together")
});
app.get("/jack-dawson", (request, response) => {
    response.send("I'm king of the world!")
});
app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive")
});
app.get("/tony-montana", (request, response) => {
    response.send("Say hello to my little friend")
});
app.get("/dorothy", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
});
app.get("/rod-tidwell", (request, response) => {
    response.send("Show me the money!")
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
