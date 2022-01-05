const express = require("express");

const routes = require("./routes");

const app = express();

const PORT = 5005;


routes.forEach(route => app.get(route.url, (request, response) => {
    const res = Math.floor(Math.random() * route.quote.length)
    Array.isArray(route.quote) ? response.send(`<h1>${route.quote[res]}</h1>`) : response.send(`<h1>${route.quote}</h1>`)
}))

app.listen(PORT, () => {
    console.log(`Success, listening on port: ${PORT}`)
})

