const banana = require("./app")
// This is a GLOBAL CONSTANT
const PORT = 3003;

banana.listen(PORT, () => {
    // console log in callback to show that it works
    console.log(`Listening on port: ${PORT}`)

})