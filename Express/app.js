const { response } = require("express")
const express = require("express")

//console.log(express)

const app = express()
//console.log(app)

// app.get(route/path, what to do in response )

app.get("/", (request, response) => {
    response.send("Hello World - I love express")
})

app.get("/universe", (request, response) => {
    response.send("Hello Universe")
})

app.listen(3003)