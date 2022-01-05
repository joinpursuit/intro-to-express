import express from 'express'

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
  
  ]

const app = express()


const port = 3003

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

app.get('*', (request, response) => {
    console.log(request.originalUrl)
    response.send(quotes[request.originalUrl.toLowerCase()])
})

app.get('/magic8', (request, response) =>{

  const message = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]

  response.send(`<h1>${message}</h1>`)
})

app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`)
})