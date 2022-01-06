const express = require("express")

const app = express()

const PORT = 3003

app.get("/", (request, response) =>  {
    response.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

// Activity Catchphrases Express