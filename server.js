//dependencies

const app = require("./app.js");

//config

const PORT = 3003;

//listen

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
