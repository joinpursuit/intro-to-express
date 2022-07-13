const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (request, response) => {
  response.send("You're reached the home page.");
});

app.get('/terminator', (request, response) => {
  response.send('Talk to the hand.');
});
app.get('/TonyMontana', (request, response) => {
  response.send('Say hello to my little friend!');
});
app.get('/RadioOperator', (request, response) => {
  response.send('We got a Black Hawk Down! We got a Black Hawk Down!');
});
app.get('/OptimusPrime', (request, response) => {
  response.send(
    'Are you Samuel James Witwicky, descendent of Archibald Witwicky?',
  );
});
app.get('/Magneto', (request, response) => {
  response.send('Peace was never an option.');
});
app.get('/Django', (request, response) => {
  response.send('What kinda dentist are you?');
});
app.get('/IndianaJones', (request, response) => {
  response.send("I've got a bad feeling about this.");
});
app.get('/Bill', (request, response) => {
  response.send('Jesus H Christ, Francis!');
});
app.get('/BigLebowskiThug', (request, response) => {
  response.send("Where's the money, Lebowski?!");
});
app.get('/HarryCallahan', (request, response) => {
  response.send('Do I feel Lucky? Well, do ya, punk?');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
