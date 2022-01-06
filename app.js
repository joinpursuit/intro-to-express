const express = require("express");

//configuration
const app = express();
const PORT = 3003;

//routes
app.get("/", (request, response) => {
    response.send("Hello, world!")
})

//listen
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})