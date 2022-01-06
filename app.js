const express = require('express');
const app = express();
const port = 3003;
const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

// "Steve McGarrett" === '/steve-mcgarrett'
const quotes = {
"/emeril": "Bam!",
"/steve-mcgarrett": "Book 'em Danno!",
"/coach-taylor": "Clear eyes, full hearts, can't Lose",
"/homer-simpson": "D'Oh",
"/bruce-banner": "Don't make me angry",
"/jj-evans": "Dy-no-myte!",
"/batman": "To the Batmobile!",
"/hannibal-smith": "I love it when a plan comes together",
"/fraiser": "I'm listening",
"/regis": "Is that your final answer?",
"/borg": "Resistance is futile",
"/fox-mulder": "The truth is out there",
"/harry-callahan": "Go ahead, make my day",
"/travis-bickle": "You talkin' to me?",
"/tony-montana": "Say hello to my little friend",
"/zeus": "Release the Kraken",
"/james-bond": "the name is Bond, James Bond",
"/dorothy": "Toto, I've got a feeling we're not in Kansas anymore",
"/rod-tidwell": "Show me the money!",
"/frankenstein": "It's alive! It's alive",
"/jim-lovell": "Houston, we have a problem",
"/rocky": "Yo, Adrian",
"/gollum": "My precious",
"/jack-dawson": "I'm king of the world!"
}

app.get('/magic8', (request, response) =>{
  const message = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  response.send(`<h1>${message}</h1>`)
})

app.get('*', (request, response) => {
    // console.log(request.originalUrl)
    response.send(quotes[request.originalUrl.toLowerCase()])
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})


























// // the way we import a library on the server side.
// const express = require("express");
// // 'express' is now a function
//     // and it returns an object
//     // with which we can manage a server

// // 'app' is now an object
//     // 'app' is an actual server app returned from the express library    
// const app = express();

// // the port well use
// // capitalize it all to indicate a global variable, and its importance
// const PORT = 3003;

// // the server object. 'app' has several methods
//     // one is '.get' - handles GET requests
//         // it takes two arguments
//             // a string for the route
//             // a function to call (a callback!) (whenever any client sends this request)
// // when the express server gets a request, it calls your callback and gives it two arguments/value:
//     // the *request
//     // the response
// // the response object has a bunch of method for sending a response back to the client
// app.get('/', (request, response) => {
//     response.send('Hi!');
// });

// // a required method to use on your server
// // it lets you open up the server to requests
// // takes two arguments:
//     // a number for the port to listen on
//     // a function to call back when the server is uip and running
// // we typically run a console log in the callback to let us know that it worked
// app.listen(PORT, () => {
//     console.log(`Listen on port: ${PORT}`);
// })




// const express = require('express');
// const app = express();
// const PORT = 3003;
// const magic8Responses = [
//     "It is certain",
//     "It is decidedly so",
//     "Without a doubt",
//     "Yes - Definitely",
//     "You may rely on it",
//     "As I see it, yes",
//     "Most likely",
//     "Outlook good",
//     "Yes, and signs point to yes",
//     "Reply hazy, try again",
//     "Ask again later",
//     "Better not tell you now",
//     "Cannot predict now",
//     "Concentrate and ask again",
//     "Don't count on it",
//     "My reply is no",
//     "My sources say no",
//     "Outlook not so good",
//     "Very doubtful"
// ];

// app.get('/:input', (request, response) => {
//     console.log(request.originalUrl);
//     console.log(request.params.input);
//     response.send(request.params);
// });
// // app.get('/emeril', (request, response) => {
// //     response.send('Bam!');
// // });   
// // app.get('/steve-mcgarret', (request, response) => {
// //     response.send('Book \'em Danno!');
// // });
// // app.get('/couch-taylor', (request, response) => {
// //     response.send('Clear eyes, full hearts, can\'t Lose');
// // });
// // app.get('/homer-simpson', (request, response) => {
// //     response.send('D\'Oh!');
// // });
// // app.get('/bruce-banner', (request, response) => {
// //     response.send('Don\'t make me angry');
// // });
// // app.get('/bruce-banner2', (request, response) => {
// //     response.send('Hulk Smash!!!');
// // });

// // app.route('/book')
// //   .get(function (req, res) {
// //     res.send('Get a random book')
// //   })
// //   .post(function (req, res) {
// //     res.send('Add a book')
// //   })
// //   .put(function (req, res) {
// //     res.send('Update the book')
// //   })


// app.get('/magic8', (request, response) => {
//     // grabs a random index/phrase from the array
//     const randomPhrase = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
//     response.send(`<h1>${randomPhrase}</h1>`);
// })


// app.listen(PORT, () => {
//     console.log('it is working!!');
// });