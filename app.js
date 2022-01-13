
const express = require('express')

const app = express 

const PORT = 3003

app.get('/', (request, responde) => {
    console.log('Hello express');
   responde.send('Hello world');
})

app.get('/terminator', (request, responde) => {
    responde.send("I'll be back")
    responde.send('Hasta la vista, baby');
 })

 app.get('/terminator2', (request, responde) => {
    responde.send('Hasta la vista, baby');
 })

 app.get('/tim-gunn', (request, responde) => {
    responde.send("Make it work");
 })

 app.get('/emeril', (request, responde) => {
    responde.send("Bam!");
 })

 app.get('/homer-simpson', (request, responde) => {
    responde.send("D'Oh");
 })

 app.get('/regis', (request, responde) => {
    responde.send("Is that your final answer ?");
 })

 app.get('/borg', (request, responde) => {
    responde.send("Resistance is furtile");
 })

 app.get('/fox-mulder', (request, responde) => {
    responde.send("the truth is out there");
 })

 app.get('/james-bond', (request, responde) => {
    responde.send("the name is Bond, James Bond");
 })

 app.get('/dorothy', (request, responde) => {
    responde.send("Toto, I've got a feeling we're not in Kansas anymore");
 })

 app.get('/jim-lovell', (request, responde) => {
    responde.send("Houston, we have a problem");
 })

 app.get('/gollum', (request, responde) => {
    responde.send("My precious");
 })

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})