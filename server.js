// Dep
const app = require('./app.js')

// Config
const port = 3000;

// Listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})