const express = require("express");
const app = express();
const PORT = 3003;

app.get("/terminator", (req, res) => {
  res.send("I'll be back!");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/SteveMcGarret", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/CoachTaylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/HomerSimpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/BruceBanner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/JJEvans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/HannibalSmith", (req, res) => {
  res.send("I love it when a plan comes together");
});

app.get("/Fraiser/loco", (req, res) => {
  res.send("I'm listening");
});

app.get("/Fraiser", (req, res) => {
    res.send("I'm listening too");
  });

app.listen(PORT, () => {
  console.log("I am listening for requests on port" + PORT);
});


//What characters are allowed in a URL?
//letter and number


// What happens if you try to create a URL /tim gunn
// Cannot get error

// Is there a difference between /timgunn and /TimGunn and /tim/gunn?
//it is not case sensative
//tim/gun is another route

// If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?
// with double quotes 