require('dotenv').config();
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
    let message = "Hello json";
    console.log("ENV", process.env.MESSAGE_STYLE);

    if (process.env.MESSAGE_STYLE == "uppercase") {
        message = message.toUpperCase();
    };

    res.json({ "message": message });
}

console.log("Hello World");




































 module.exports = app;
