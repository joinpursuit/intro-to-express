// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
const port = 3000;

// LISTEN
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
