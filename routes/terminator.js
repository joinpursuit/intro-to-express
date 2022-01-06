const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('I\ll be back')
});

router.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
});
router.get('/emeril', (req, res) => {
    res.send('Bam!')
});
router.get('/steve-mcgarrett', (req, res) => {
    res.send('Book \'em Danno!')
});
router.get('/coach-taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`)
});
router.get('/regis', (req, res) => {
    res.send('Is that your final answer?')
});
router.get('/travis-bickle', (req, res) => {
    res.send('You talkin\' to me?')
});
router.get('/tony-montana', (req, res) => {
    res.send('Say hello to my little friend')
});
router.get('/James-Bond', (req, res) => {
    res.send('the name is Bond, James Bond')
});
router.get('/Rod-Tidwell ', (req, res) => {
    res.send('Show me the money!')
});


module.exports = router