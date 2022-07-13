// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
const PORT = 3333;

// LISTEN
app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});
