const express = require('express');
const { dirname } = require('path');
const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname, "./public")))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Server is Live 3002');
    console.log(path.resolve(__dirname, "./public"));
})