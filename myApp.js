let express = require('express');
let app = express();

app.use('/public', express.static('__dirname + /public'));
app.get("/", get);



function get(req, res) {
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
}

console.log("Hello World");




































 module.exports = app;
