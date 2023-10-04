let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use('/public', express.static(__dirname + '/public'));
app.get('/', get);
app.get('/json', getJson);
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({ time: req.time });
})
app.get('/:word/echo', echoServer);
app.route('/name').get((req, res, next) => {
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.send({ name: `${firstName} ${lastName}`});
    next();
}).post((req, res, next) => {

})

function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}

function get(req, res) {
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
}

function getJson(req, res) {
    let message = "Hello json";

    if (process.env.MESSAGE_STYLE == "uppercase") {
        message = message.toUpperCase();
    };

    res.json({ "message": message });
}

function echoServer(req, res, next) {
    const inputWord = req.params.word;
    res.send({ echo: inputWord });
}

console.log("Hello World");




































 module.exports = app;
