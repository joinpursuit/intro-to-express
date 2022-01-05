const express = require("express");

const app = express();
const PORT = 3003;

//when we get this request ('/')
//then do this function
app.get("/", (request, response) => {
  response.send("Yellow World");
});

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
