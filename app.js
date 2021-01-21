const express = require('express');
const { dirname } = require('path');
const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname, "./public")))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.listen(3002, ()=> {
    console.log('Server is Live 3002');
    console.log(path.resolve(__dirname, "./public"));
})