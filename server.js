//DEPENDENCIES
const app = require('./app');

//CONFIG
const PORT = 3003;

//LISTEN
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})