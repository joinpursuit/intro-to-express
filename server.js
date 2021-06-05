// DEPENDENCIES
const app = require('./app.js')

// CONFIGURATION
const PORT = 3014

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})