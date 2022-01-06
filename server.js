// DEPENDENCIES
const app = require('./app.js')

// CONFIGURATION
const PORT = 3003

//A basically required method to use on your server. 
//It lets you open up the server to requests. It takes teo arguments:
// - a number for the port to listen to.
// - a function to call back when the server is up and running
//We typically run a console in the callback to let us know that it worked
app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})
