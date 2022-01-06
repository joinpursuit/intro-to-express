import express from 'express'

import quotes from './routes.js'

const app = express()


const port = 3003


app.get('*', ({originalUrl: url}, response) => {
    response.send(quotes.getValue(url) || `Bad Request ${url}`)
})


app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`)
})