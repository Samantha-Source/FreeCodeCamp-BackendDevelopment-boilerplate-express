let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));
app.get("/", get);
app.get("/json", getJson);



function get(req, res) {
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
}

function getJson(req, res) {
    res.json({"message": "Hello json"});
}

console.log("Hello World");




































 module.exports = app;
