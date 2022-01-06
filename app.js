const express = require("express");
let app = express();

app.get("/", (req, res) => {
	res.status(500).send("Hi there !! ");
	console.log("hello to you too");
});

app.listen(3000);
