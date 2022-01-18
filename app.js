const { response } = require('express')
const express = require('express')
const responses = require('./responses')

const app=express()
const PORT = 3003

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/terminator', (req, res) => {
    res.send(`I'll be back`)
  })

app.get('/terminator2', (req, res) => {
    res.send(`Hasta la vista, baby`)
  })

app.get('/Emeril',(req,res)=>{
    res.send('Bam!')
})

app.get('/homer-simpson',(req,res)=>{
    res.send(`D'oh`)
})
app.get('/Bad-bunny',(req,res)=>{
    res.send('yeah yeah yeah yeah')
})
app.get('/anuel',(req,res)=>{
    res.send('BRRRRRR')
})
app.get('/bruce-banner',(req,res)=>{
    res.send(`Don't make me angry`)
})
app.get('/gollum',(req,res)=>{
    res.send('My precious')
})
app.get('/groot',(req,res)=>{
    res.send('I AM GROOT')
})
app.get('/frankenstein',(req,res)=>{
    res.send(`It's alive! It's alive.`)
})
app.get('/james-bond',(req,res)=>{
    res.send('the name is Bond, James Bond')
})
app.get('/rocky',(req,res)=>{
    res.send('Yo, Adrian')
})


app.get('/magic8',(req,res)=>{
  let index = Math.floor(Math.random() * responses.length);
  let answer = responses[index];
  res.send(answer)
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})