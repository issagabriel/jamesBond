const express = require('express')
const app = express()

app.use(express.static("public"));


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html')
})


app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html')
})
app.get('/actors', (request, response) => {
    response.sendFile(__dirname + '/views/actors-page.html')
})
app.get('/listofmovies', (request, response) => {
    response.sendFile(__dirname + '/views/movies-page.html')
})



app.listen(3000)