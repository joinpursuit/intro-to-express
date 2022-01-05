//"type": "module"
import express from "express";

/**
 * "express" is a actually a function and it 
 * returns an object with which we can use to 
 * manage a server.
 */
const app = express();

//This is the port we'll use
const port = 3003;

app.get("/", (request, response)=> {
 response.send('Hiiiii there')
})

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})