const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {

    res.send("Oh? an user?") // test purpose
    // res.render("index", {test: "Yes"})
});
router.get('/new', (req, res) => {
  
    res.send("Oh? a new user?") // test purpose
    // res.render("index", {test: "Yes"})
});

module.exports = router