// Dependencies
const express = require('express');

// Configuration
const app = express();
const PORT = 3003;

// Routes
app.get('/', (request, response)=>{
    response.send('Hello, World');
})

// Listen
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})


