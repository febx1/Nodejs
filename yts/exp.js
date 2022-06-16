const express = require('express')
const app = express()
const path = require('path')


app.listen(30, () => {
    console.log('server started on p 30')
    console.log(__filename + " " + __dirname)
})
app.use((req, res, next) => {
    console.log('started')
    next()
})
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'signup.html'))
    next()
})
app.post('/signup', (req, res) => {

    res.send('created')
})
app.get('/about', function (req, res) {
    res.send('about')
})