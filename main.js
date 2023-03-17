var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
    var contents = fs.readFileSync('./public/index.html');
    res.send(contents.toString());
});

app.get('/guestbook', function(req, res) {
    var contents = fs.readFileSync('./public/guestbook.html');
    res.send(contents.toString());
});

app.get('/newmessage', function(req, res) {
    var contents = fs.readFileSync('./public/newmessage.html');
    res.send(contents.toString());
});

app.get('/ajaxmessage', function(req, res) {
    var contents = fs.readFileSync('./public/ajaxmessage.html');
    res.send(contents.toString());
});

app.get('*', function(req, res) {
    res.send("Can\'t find requested page");
});

app.listen(8080);
console.log('Toimii');